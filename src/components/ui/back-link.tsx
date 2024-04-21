'use client';

import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';

export type BackLinkProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  children: string;
  className?: string;
};

export const BackLink = ({ children, className, ...props }: BackLinkProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };

  return (
    <button
      className={cn('text-muted text-md hover:text-foreground', className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
