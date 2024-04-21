import { VariantProps, tv } from 'tailwind-variants';

export const ButtonVariants = tv({
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium ',
  variants: {
    variant: {
      primary: 'bg-primary text-background hover:bg-primary/80',
      all: 'text-primary bg-blue-500/20',
      'personal-finances': 'text-primary bg-blue-500/20',
      debts: 'text-red-500 bg-red-500/20',
      investments: 'text-green-500 bg-green-500/20',
      none: 'text-muted'
    },
    size: {
      sm: 'px-4 py-2',
      md: 'px-6 py-3',
      lg: 'px-8 py-4',
      xl: 'px-10 py-5'
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    rounded: 'md'
  }
});

export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariants> & {
    children: React.ReactNode;
    className?: string;
  };

export const Button = ({
  children,
  className,
  rounded,
  size,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={ButtonVariants({ variant, size, rounded, className })}
      {...props}
    >
      {children}
    </button>
  );
};
