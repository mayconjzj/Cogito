export const CardPostAutor = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p className="font-bold text-zinc-900">{children}</p>
      <p className="text-zinc-600 text-sm">{new Date().toLocaleDateString()}</p>
    </div>
  );
};
