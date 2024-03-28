import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex items-center h-28">
      <div>
        <Link href="/">
          <h1 className="text-4xl font-black text-primary">Cogito</h1>
        </Link>
      </div>
    </header>
  );
};
