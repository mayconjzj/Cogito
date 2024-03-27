import Link from 'next/link';

export default function Page() {
  return (
    <main className="space-y-12">
      <article className="space-y-3">
        <button className="bg-zinc-100 hover:bg-zinc-300 px-4 py-2 rounded-3xl duration-300">
          <Link href="/">Voltar</Link>
        </button>
        <h1>Post</h1>
      </article>
    </main>
  );
}
