import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/config/posts';

export const generateMetadata = ({
  params
}: {
  params: { slug: string };
}): Metadata => {
  return {
    title: posts.find((post) => post.slug === params.slug)?.title,
    description: posts.find((post) => post.slug === params.slug)?.description,
    openGraph: {
      title: posts.find((post) => post.slug === params.slug)?.title,
      description: posts.find((post) => post.slug === params.slug)?.description
    },
    twitter: {
      title: posts.find((post) => post.slug === params.slug)?.title,
      description: posts.find((post) => post.slug === params.slug)?.description
    },
    authors: [{ name: 'Maycon Douglas', url: 'https://github.com/mayconjzj' }],
    category: 'Artigo',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${params.slug}`
    },
    keywords: [
      'Cogito',
      'Conhecimento Geral',
      'Artigos',
      'Curiosidades',
      `${posts.find((post) => post.slug === params.slug)?.title}`
    ]
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  return (
    <main className="space-y-6">
      <article>
        <div className="space-y-6 pb-10 border-b-border border-b-[0.5px]">
          <Link href="/" className="text-muted text-md hover:text-primary">
            Voltar
          </Link>
          <div>
            <p className="text-muted text-md">Publicado no dia {post?.date}</p>
          </div>
          <h1 className="font-black text-primary text-4xl">{post?.title}</h1>
          {post?.image && (
            <div className="flex w-full h-[200px] sm:h-[450px] relative rounded-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <p className="text-muted">{post?.description}</p>
        </div>
        <div className="text-justify">
          {post?.contents &&
            post.contents.map((content) => (
              <div
                key={content.subTitle}
                className="space-y-6 text-justify py-10 border-b-border border-b-[0.5px]"
              >
                <h2 className="font-bold text-primary text-2xl">
                  {content.subTitle}
                </h2>
                <div className="space-y-3 text-xl">
                  {content.descriptions?.map((description) => (
                    <p key={description}>{description}</p>
                  ))}
                </div>
                {content.image && (
                  <div className="flex w-full h-[200px] sm:h-[450px] relative rounded-md overflow-hidden">
                    <Image
                      src={content.image}
                      alt={content.subTitle}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
        </div>
      </article>
      <section className="space-y-6">
        <h1 className="font-bold text-primary text-2xl">Outros Artigos</h1>
        <div className="space-y-6">
          {posts
            .filter((post) => post.slug !== params.slug)
            .slice(0, 5)
            .map((post) => (
              <div className="flex gap-x-2" key={post.slug}>
                <Link href={`/post/${post.slug}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={200}
                    height={150}
                    className="object-cover min-w-[250px] rounded-md"
                  />
                </Link>
                <div className="h-[150px] flex flex-col justify-evenly">
                  <Link href={`/post/${post.slug}`}>
                    <h2 className="font-bold text-primary text-xl">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-muted text-md line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
