import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    category: 'Ovos',
    pathImage: '/images/ovos.png',
    path: 'requests/eggs',
  },
  {
    id: 2,
    category: 'Pão',
    pathImage: '/images/pao.png',
    path: 'requests/bread',
  },
  {
    id: 3,
    category: 'Ingredientes',
    pathImage: '/images/ingredientes.png',
    path: 'requests/ingredients',
  },
  {
    id: 4,
    category: 'Tapioca',
    pathImage: '/images/dumplings.png',
    path: 'requests/tapioca',
  },
];

export default function Home() {
  return (
    <div className=" w-96 flex flex-wrap items-center justify-center gap-4">
      {categories.map((item) => {
        return (
          <Link
            href={item.path}
            key={item.id}
            className="flex flex-col items-center justify-between gap-8 w-40 h-auto p-2 rounded-lg bg-slate-50 border border-slate-200 hover:border-orange-500 cursor-pointer transition-colors"
          >
            <Image
              priority
              src={item.pathImage}
              className="w-20 h-20 object-contain aspect-square"
              height={108}
              width={108}
              alt={item.category}
            />
            <strong>{item.category}</strong>
          </Link>
        );
      })}
    </div>
  );
}
