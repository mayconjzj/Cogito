import React from 'react';

import { cn } from '@/lib/utils';

export const CardPostDescription = ({
  children,
  className
}: React.HtmlHTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn('text-muted text-sm line-clamp-4', className)}>
      {children}
    </p>
  );
};
