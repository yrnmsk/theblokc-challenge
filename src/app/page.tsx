'use client';

import { useState } from 'react';
import Image from "next/image";

export default function Button() {
  const [wallet, setWallet] = useState({ accounts: [] });

  async function connectMetamask() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts', });

    setWallet({ accounts });
  }

  return (
    <button
      className='px-4 py-3 bg-gradient-to-br from-sky-500/75 from-60% to-indigo-500/50 shadow-md shadow-slate-950 transition-all ease-out duration-75 text-slate-50 border border-sky-900 rounded-lg flex flex-row gap-2 justify-center items-center md:px-6 md:py-4 md:rounded-xl md:text-lg hover:from-sky-500/50 hover:from-30% hover:to-indigo-500/30 hover:border-sky-400 hover:shadow-indigo-900 hover:translate-x-1 hover:-translate-y-1'
      onClick={connectMetamask}
    >
      <span>Connect with MetaMask</span>
      <Image className='h-auto' src='/icon-metamask.svg' alt='metamask logo' width={32} height={32} />
    </button>
  );
}
