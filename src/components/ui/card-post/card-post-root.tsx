import { cn } from '@/lib/utils';

export const CardPostRoot = ({
  children,
  className
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'w-full max-w-[352px] h-full flex flex-col items-center justify-center gap-2',
        className
      )}
    >
      {children}
    </div>
  );
};
