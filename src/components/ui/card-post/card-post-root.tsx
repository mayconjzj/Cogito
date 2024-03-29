import { cn } from '@/lib/utils';

export const CardPostRoot = ({
  children,
  className
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'w-full max-w-[320px] h-[450px]  flex flex-col items-center justify-center gap-2 p-4 rounded-md border-border border-[0.5px] hover:bg-gradient-to-b from-background to-zinc-800/50',
        className
      )}
    >
      {children}
    </div>
  );
};
