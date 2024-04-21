import Link from 'next/link';

import { ActiveLink } from './ui/active-link';

export const Header = () => {
  return (
    <header className="px-2 sm:px-12 lg:px-24 h-[70px] shadow sticky top-0 bg-background/80 backdrop-blur-sm flex items-center justify-between">
      <div>
        <Link
          className="font-black tracking-tighter text-5xl text-primary"
          href="/"
        >
          Gainly
        </Link>
      </div>

      <nav>
        <ul className="flex gap-x-6">
          <li>
            <ActiveLink href="/">Início</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/blog">Blog</ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
