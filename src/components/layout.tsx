import Navbar from './navbar';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import LoginBtn from './login-btn';

export default function Layout({ children }: any) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 w-screen h-screen">
      <main className="w-[60vw] h-[80dvh] flex flex-col items-center gap-4 mx-auto mt-6 mb-1 p-4 bg-white rounded-lg">
        <div className="w-full flex items-center justify-start py-2">
          {router.pathname !== '/' ? (
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-sm text-slate-800 rounded-full p-2 hover:bg-slate-50 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
          ) : (
            false
          )}
          <LoginBtn />
        </div>
        {children}
      </main>
      <Navbar />
    </div>
  );
}
