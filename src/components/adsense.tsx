'use client';

import Adsense from 'react-adsense-google';

import { cn } from '@/lib/utils';

export type AdSenseProps = React.ComponentProps<typeof Adsense> & {
  layout?: string;
};

export const AdSense = ({ className, ...props }: AdSenseProps) => {
  return <Adsense className={cn('block text-center', className)} {...props} />;
};
