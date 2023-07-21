import Image from "next/image";

export default function Page() {
  return (
    <button className='px-4 py-3 bg-orange-700/90 text-slate-50 border border-slate-500 rounded-lg flex flex-row gap-2 justify-center items-center md:px-6 md:py-4 md:rounded-xl md:text-lg hover:bg-orange-700/70'>
      <span>Connect with MetaMask</span>
      <Image className='h-auto' src='/icon-metamask.svg' alt='metamask logo' width={32} height={32} />
    </button>
  );
}
