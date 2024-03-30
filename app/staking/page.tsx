'use client'

import { Metamask } from '#/ui/metamask';

export default function Page() {


  return (
    <div className="m-1">
      <div className="flex items-center">
        <h2 className="staking-header">STAKING</h2>
        <Metamask />
      </div>

      <div className="mt-5">
        <h5 className="text-gray-400">Total Pool Balance:</h5>
        <h2 className="tracking-widest text-white font-bold text-xl">1.000.000 <span className="text-orange-400 font-semibold">MRB</span></h2>
      </div>

      <div className="mt-5">
        <h5 className="text-gray-400">Total Payout Distribution:</h5>
        <h3 className="tracking-tight text-pink-400 font-lighter text-sm">3% of total pool</h3>
        <h2 className="tracking-widest text-white font-bold text-xl">30.000 <span className="text-orange-400 font-semibold">MRB</span></h2>
      </div>

      <div className="mt-5">
        <h5 className="text-gray-400">Next payout distribution:</h5>
        <h2 className="tracking-widest text-white font-bold text-xl">24:25:27</h2>
      </div>

      <div className="mt-5">
        <h5 className="text-gray-400">My MRB balance:</h5>
        <h2 className="tracking-widest text-white font-bold text-xl">1.000.000 <span className="text-orange-400 font-semibold">MRB</span></h2>
      </div>
    </div>
);}
