import {
  DocumentTextIcon,
  QueueListIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  {
    key: 1,
    href: '/',
    alt: 'Home Page',
    icon: <QueueListIcon className="h-6 w-6" />,
  },
  {
    key: 2,
    href: '/my-orders',
    alt: 'Meus Pedidos',
    icon: <DocumentTextIcon className="h-6 w-6" />,
  },
  {
    key: 3,
    href: '/profile',
    alt: 'Meus Dados',
    icon: <UserIcon className="h-6 w-6" />,
  },
];

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center w-full">
      <nav className="w-[30vw] px-2 rounded-full bg-white ">
        <ul className="flex items-center justify-between w-full">
          <li>
            <Link href={'/'}>
              <Image
                priority
                src="/logo.svg"
                className="rounded-full w-14 h-14"
                height={108}
                width={108}
                alt="logo kouzina"
                aria-label="logo Kouzina"
              />
            </Link>
          </li>
          {navigation.map((item) => {
            return (
              <li
                key={item.key}
                className={
                  router.pathname === item.href
                    ? 'flex items-center justify-center w-12 h-12 rounded-full bg-orange-200 text-orange-500'
                    : 'flex items-center justify-center w-12 h-12 rounded-full text-slate-500 hover:bg-slate-100 transition-colors'
                }
              >
                <Link href={item.href} aria-label={item.alt}>
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
