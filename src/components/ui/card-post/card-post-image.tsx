import Image from 'next/image';

import { cn } from '@/lib/utils';

export type CardPostImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const CardPostImage = ({ src, alt, className }: CardPostImageProps) => {
  return (
    <div
      className={cn(
        'flex w-full h-[240px] relative rounded-2xl overflow-hidden',
        className
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};
