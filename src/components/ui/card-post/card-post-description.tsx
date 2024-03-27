import React from 'react';

import { cn } from '@/lib/utils';

export const CardPostDescription = ({
  children,
  className
}: React.HtmlHTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn('text-zinc-600 text-sm line-clamp-2', className)}>
      {children}
    </p>
  );
};
