import { cn } from '@/lib/utils';

export type FinanceItemTitleProps = {
  children: string;
  className?: string;
  active?: boolean;
};

export const FinanceItemTitle = ({
  children,
  className,
  active
}: FinanceItemTitleProps) => {
  return (
    <h2
      className={cn(
        `font-bold text-muted mb-3 text-lg ${active && 'text-foreground'}`,
        className
      )}
    >
      {children}
    </h2>
  );
};
