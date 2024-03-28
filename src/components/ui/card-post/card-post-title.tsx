import React from 'react';

import { cn } from '@/lib/utils';

export const CardPostTitle = ({
  children,
  className
}: React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className={cn('font-black text-xl text-primary', className)}>
      {children}
    </h1>
  );
};