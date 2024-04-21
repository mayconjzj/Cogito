import { VariantProps, tv } from 'tailwind-variants';

export const badgeVariants = tv({
  base: 'py-1 px-2 text-xs rounded-full text-center',
  variants: {
    category: {
      'personal-finances': 'bg-blue-500/20 text-blue-500',
      debts: 'bg-red-500/20 text-red-500',
      investments: 'bg-green-500/20 text-green-500'
    }
  },
  defaultVariants: {
    category: 'personal-finances'
  }
});

export type BadgeProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants> & {
    children: React.ReactNode;
    className?: string;
  };

export const Badge = ({ children, className, category }: BadgeProps) => {
  return (
    <span className={badgeVariants({ category, className })}>{children}</span>
  );
};
