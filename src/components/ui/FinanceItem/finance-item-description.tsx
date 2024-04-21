import { cn } from '@/lib/utils';

export type FinanceItemDescriptionProps = {
  children: string;
  className?: string;
};

export const FinanceItemDescription = ({
  children,
  className
}: FinanceItemDescriptionProps) => {
  return <span className={cn('text-muted', className)}>{children}</span>;
};
