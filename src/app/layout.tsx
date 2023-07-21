import '../styles/globals.css';

export const metadata = {
  title: 'TheBLOKC | Internship Challenge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='w-screen h-screen bg-slate-900'>
        <main className='w-full h-full flex flex-col justify-center items-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
