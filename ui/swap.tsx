'use client'

import React, { useState, useEffect } from "react";
import { Input, message } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { ethers } from "ethers"; // Import ethers library
import { Web3Provider } from "ethers/providers";

interface SwapProps {
  address: string;
  isConnected: boolean;
}

function Swap(props: SwapProps) {
  const { address, isConnected } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [tokenOneAmount, setTokenOneAmount] = useState<number | null>(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState<number | null>(null);
  const [prices, setPrices] = useState<{ ratio: number } | null>(null);
  const [txDetails, setTxDetails] = useState<{
    to: string | null;
    data: string | null;
    value: string | null;
  }>({
    to: null,
    data: null,
    value: null,
  });

  // Hardcoded tokens
  const tokenOne = {
    ticker: "USDT",
    address: "0x55d398326f99059ff775485246999027b3197955",
  };
  const tokenTwo = {
    ticker: "MRB",
    address: "0x6624519e5948CdfAb871f4D13a0557F036ee2782",
  };

  async function sendTransaction() {
    try {
      if (window.ethereum) {
        await window.ethereum.enable(); // Request access to user's accounts
        const provider = new Web3Provider(window.ethereum); // Use Web3Provider
        const signer = provider.getSigner();
        const contract = new ethers.Contract(txDetails.to!, [], signer); // Replace YourContractABI with your contract ABI
        const tx = await contract.transfer(txDetails.to!, txDetails.value!);
        const response = await signer.sendTransaction(tx); // Use signer to send transaction
        await response.wait(); // Wait for transaction to be mined
        messageApi.success("Transaction successful");
      } else {
        throw new Error("Please install MetaMask or another Ethereum wallet extension");
      }
    } catch (error) {
      console.error("Transaction error:", error);
      messageApi.error("Transaction failed");
    }
  }




  function changeAmount(e: React.ChangeEvent<HTMLInputElement>) {
    setTokenOneAmount(parseFloat(e.target.value));
    if (e.target.value && prices) {
      setTokenTwoAmount(parseFloat((parseFloat(e.target.value) * 1000).toFixed(2))); // Convert MRB to USDT
    } else {
      setTokenTwoAmount(null);
    }
  }

  async function fetchPrices() {
    // Assuming prices are fixed, no need to fetch
    setPrices({ ratio: 1000 }); // 1 MRB = 0.001 USDT
  }

  async function fetchDexSwap() {
    // No need to swap, as prices are fixed
    if (tokenOneAmount && tokenTwoAmount !== null) {
      const calculatedAmount = parseFloat((tokenOneAmount * 1000).toFixed(2)); // Convert MRB to USDT and parse to float
      setTokenTwoAmount(calculatedAmount);
      setTxDetails({
        to: tokenTwo.address,
        data: null,
        value: calculatedAmount.toString(),
      });
    }
  }


  useEffect(() => {
    fetchPrices();
  }, []);

  useEffect(() => {
    if (txDetails.to && isConnected) {
      sendTransaction();
    }
  }, [txDetails, isConnected]);

  useEffect(() => {
    if (messageApi) {
      messageApi.destroy();
    }
  }, [messageApi]);

  return (
    <>
      {contextHolder}
      <div className="tradeBox">
        <div className="tradeBoxHeader">
          <h2>Swap</h2>
        </div>
        <div className="inputs">
          <Input
            placeholder="0"
            value={tokenOneAmount ? tokenOneAmount.toString() : ""}
            onChange={changeAmount}
            disabled={!prices}
          />
          <Input placeholder="0" value={tokenTwoAmount || ""} disabled={true} />
          <div className="switchButton">
            <ArrowDownOutlined className="switchArrow" />
          </div>
          <div className="assetOne">
            <img src="tether-logo.png" alt="assetOneLogo" className="assetLogo" />
            {tokenOne.ticker}
          </div>
          <div className="assetTwo">
            <img src="./flame.png" alt="assetOneLogo" className="assetLogo" />
            {tokenTwo.ticker}
          </div>
        </div>
        <div className="swapButton" onClick={fetchDexSwap}>
          Swap
        </div>
      </div>
    </>
  );
}

export default Swap;
