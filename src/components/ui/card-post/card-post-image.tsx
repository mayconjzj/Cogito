import Image from 'next/image';

export type CardPostImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const CardPostImage = ({ src, alt }: CardPostImageProps) => {
  return <Image src={src} alt={alt} fill className="object-cover" />;
};
