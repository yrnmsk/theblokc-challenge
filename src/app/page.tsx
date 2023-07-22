'use client';

import { useState } from 'react';
import Image from "next/image";

export default function Page() {
  const [account, setAccount] = useState<account>({
    address: '',
    balance: '',
  });

  async function getAccounts() {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      return accounts as string[];
    } catch (error) {
      console.error(error);
    }
  }

  async function getBalance(address: string) {
    try {
      const rawBalance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest'],
      });
      const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);

      return balance;
    } catch (error) {
      console.error(error);
    }
  }

  async function updateAccount() {
    const accounts = await getAccounts();

    const address = accounts.at(0);
    const balance = await getBalance(address);

    return { address, balance };
  }

  function connectMetamask() {
    updateAccount()
      .then(({ address, balance }) => setAccount(() => ({ address, balance })))
      .catch((error) => console.error(error));
  }

  return (
    <div className='flex flex-col gap-6 px-10 py-8 bg-slate-800 rounded-2xl'>
      <div className='flex flex-col gap-3'>
        <h3 className='text-slate-200 text-2xl font-bold'>Connect wallet</h3>
        <hr className='border-slate-600'/>
      </div>
      <button
        className='px-4 py-3 bg-gradient-to-br from-sky-500/75 from-60% to-indigo-500/50 shadow-inner shadow-indigo-300 transition-all ease-out duration-75 text-slate-50 border border-sky-900 rounded-lg flex flex-row gap-2 justify-center items-center md:px-6 md:py-4 md:rounded-xl md:text-lg hover:from-sky-500/50 hover:from-30% hover:to-indigo-500/30 hover:border-sky-400 hover:shadow-lg hover:shadow-indigo-950 hover:translate-x-2 hover:-translate-y-2'
        onClick={connectMetamask}
      >
        <span>Connect with Metamask</span>
        <Image className='h-auto' src='/icon-metamask.svg' alt='metamask logo' width={32} height={32} />
      </button>
    </div>
  );
}
