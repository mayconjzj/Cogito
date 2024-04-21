'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export type ActiveLinkProps = {
  children: string;
  className?: string;
  href: string;
};

export const ActiveLink = ({ children, className, href }: ActiveLinkProps) => {
  const isActive = href === usePathname();

  return (
    <Link
      className={cn(
        `hover:text-primary text-muted duration-300 font-medium ${isActive && 'text-primary'}`,
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
