'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [account, setAccount] = useState<account>({
    address: '',
    balance: '',
  });
  const connected = useRef(false);

  async function getAccounts() {
    try {
      const accounts = await window.ethereum.request<string[]>({
        method: 'eth_requestAccounts',
      });

      return accounts;
    } catch (error) {
      console.error(error);
    }
  }

  async function getBalance(address: string) {
    try {
      const rawBalance = await window.ethereum.request<string>({
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

    connected.current = true;
  }

  function copyToClipboard() {
    window.navigator.clipboard
      .writeText(account.address)
      .catch((error) => console.error(error));
  }

  const connect = (
    <div className='flex flex-col gap-6 rounded-2xl bg-slate-800 px-10 py-8'>
      <div className='flex flex-col gap-3'>
        <h3 className='text-2xl font-bold text-slate-200'>Connect wallet</h3>
        <hr className='border-slate-600' />
      </div>
      <button
        className='flex flex-row items-center justify-center gap-2 rounded-lg border border-sky-900 bg-gradient-to-br from-sky-500/75 from-60% to-indigo-500/50 px-4 py-3 text-slate-50 shadow-inner shadow-indigo-300 transition-all duration-75 ease-out hover:-translate-y-1 hover:translate-x-1 hover:border-sky-400 hover:from-sky-500/50 hover:from-30% hover:to-indigo-500/30 hover:shadow-lg hover:shadow-indigo-950'
        onClick={connectMetamask}>
        <span>Connect with Metamask</span>
        <Image
          className='h-auto'
          src='/icon-metamask.svg'
          alt='metamask logo'
          width={32}
          height={32}
        />
      </button>
    </div>
  );

  const display = (
    <div className='max-w-5/12 flex flex-col gap-6 rounded-2xl bg-slate-800 px-10 py-8'>
      <div className='flex flex-col gap-3'>
        <h3 className='text-2xl font-bold text-slate-200'>Wallet account</h3>
        <hr className='border-slate-600' />
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <label
            className='text-sm font-bold capitalize text-slate-400'
            htmlFor='address'>
            address
          </label>
          <div className='relative rounded-lg border border-slate-500 bg-slate-700'>
            <input
              className='truncate border-none bg-transparent py-2 pl-4 pr-14 font-extralight text-slate-200 outline-none'
              type='text'
              name='address'
              id='address'
              value={account.address}
              readOnly
            />
            <button
              className='absolute right-0 top-0 flex items-center justify-center rounded-r-lg border-l border-slate-500 p-[10px]'
              onClick={copyToClipboard}>
              <Image
                src='/icon-copy.svg'
                alt='copy icon'
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-sm font-bold capitalize text-slate-400'>
            balance
          </span>
          <span className='font-extrabold text-slate-200'>${account.balance}</span>
        </div>
      </div>
    </div>
  );

  return connected.current ? display : connect;
}
