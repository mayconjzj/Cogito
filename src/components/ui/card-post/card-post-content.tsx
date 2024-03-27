import { cn } from '@/lib/utils';

export const CardPostContent = ({
  children,
  className
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('flex flex-col flex-1 gap-y-6', className)}>
      {children}
    </div>
  );
};
