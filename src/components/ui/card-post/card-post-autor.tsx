export const CardPostAutor = ({
  children,
  date
}: {
  children: React.ReactNode;
  date: string;
}) => {
  return (
    <div>
      <p className="font-bold text-foreground">{children}</p>
      <p className="text-muted text-sm">{date}</p>
    </div>
  );
};
