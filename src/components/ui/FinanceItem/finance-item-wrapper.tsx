import { cn } from '@/lib/utils';

export type FinanceItemWrapperProps = {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
};

export const FinanceItemWrapper = ({
  children,
  className,
  active,
  onClick,
  ...props
}: FinanceItemWrapperProps) => {
  return (
    <div
      className={cn(
        `cursor-pointer p-6 space-y-6 max-w-[360px] w-full border-l-[4px] border-l-blue-300 ${active && 'border-l-blue-500'}`,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
