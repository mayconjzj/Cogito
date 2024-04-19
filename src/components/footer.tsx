export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-2 h-20 flex items-center max-w-[1080px] m-auto border-t-[0.5px] border-t-border">
      <div className="space-y-2">
        <p className="text-muted font-light text-sm">
          &copy; {year} cogito-six.vercel.app | Todos os direitos reservados
        </p>
        <p className="text-muted font-light text-sm">
          Powered by Maycon Douglas
        </p>
      </div>
    </footer>
  );
};
