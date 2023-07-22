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

    console.log(account);
  }

  return (
    <button
      className='px-4 py-3 bg-gradient-to-br from-sky-500/75 from-60% to-indigo-500/50 shadow-inner shadow-indigo-300 transition-all ease-out duration-75 text-slate-50 border border-sky-900 rounded-lg flex flex-row gap-2 justify-center items-center md:px-6 md:py-4 md:rounded-xl md:text-lg hover:from-sky-500/50 hover:from-30% hover:to-indigo-500/30 hover:border-sky-400 hover:shadow-lg hover:shadow-indigo-950 hover:translate-x-1 hover:-translate-y-1'
      onClick={connectMetamask}
    >
      <span>Connect with MetaMask</span>
      <Image className='h-auto' src='/icon-metamask.svg' alt='metamask logo' width={32} height={32} />
    </button>
  );
}
