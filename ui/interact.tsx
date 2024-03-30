'use client'
// Declare a global interface to extend the Window interface
declare global {
  interface Window {
      ethereum?: any; // You can specify the exact type if available
  }
}

export const connectWallet = async () => {
  if (window.ethereum) {
      try {
          const addressArray = await window.ethereum.request({
              method: "eth_requestAccounts",
          })
          const obj = {
              status: "",
              address: addressArray[0],
          }
          return obj
      } catch (err) {
          if (err instanceof Error) {
              return {
                  address: "",
                  status: "",
              }
          } else {
              return {
                  address: "",
                  status: "",
              }
          }
      }
  } else {
      return {
          address: "",
          status: (""),
      }
  }
}

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "",
        };
      } else {
        return {
          address: "",
          status: "",
        };
      }
    } catch (err) {
      if (err instanceof Error) {
        return {
          address: "",
          status: "",
        };
      } else {
        return {
          address: "",
          status: "🔴",
        };
      }
    }
  } else {
    return {
      address: "",
      status: (""
      ),
    };
  }
};
