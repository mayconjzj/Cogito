import Link from 'next/link';

export default function Home() {
  return (
    <section className="space-y-6 max-w-[1080px] m-auto">
      <h1 className="text-xl font-thin">Artigos</h1>

      <ul className="space-y-6">
        <li>
          <Link href={'/post/acfvnf'}>
            <div className="bg-primary p-4 space-y-6">
              <h2 className="text-lg font-bold">O que é o dinheiro?</h2>
              <div className="bg-blue-500 w-full h-[160px]" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                esse enim explicabo inventore vero excepturi quis similique
                omnis molestiae fugit consectetur, voluptatum, repellendus natus
                dicta, ex facere distinctio deleniti ducimus.
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
