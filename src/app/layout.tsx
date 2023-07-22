import '../styles/globals.css';

export const metadata = {
  title: 'TheBLOKC | Internship Challenge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='h-screen w-screen bg-slate-900'>
        <main className='flex h-full w-full flex-col items-center justify-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
