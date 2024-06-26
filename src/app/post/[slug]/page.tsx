import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/config/posts';

import { BackLink } from '@/components/ui/back-link';

import { shuffleArray } from '@/utils/shuffleArray';

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
      'Finanças pessoais',
      'Fundamentos financeiros',
      'Futuro financeiro',
      'Fazer investimentos',
      'Fiscalização financeira',
      `${posts.find((post) => post.slug === params.slug)?.title}`
    ]
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);
  console.log(post);

  return (
    <section className="px-2 sm:px-12 lg:px-24 space-y-6">
      <article className="max-w-[860px] space-y-6">
        <div className="space-y-6">
          <BackLink>Voltar</BackLink>
          <div>
            <p className="text-muted text-md">Publicado no dia {post?.date}</p>
          </div>
          <h1 className="font-black text-4xl">{post?.title}</h1>
          {post?.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={768}
              height={512}
              className="object-cover w-full rounded-xl overflow-hidden"
            />
          )}
          <p className="text-muted">{post?.description}</p>
        </div>

        <ul className="space-y-6">
          {post?.contents &&
            post.contents.map((content) => (
              <li key={content.subTitle} className="space-y-6">
                <h2 className="font-bold text-xl">{content.subTitle}</h2>
                <div className="space-y-3">
                  {content.descriptions?.map((description) => (
                    <p className="md:text-lg" key={description}>
                      {description}
                    </p>
                  ))}
                </div>
                {content.image && (
                  <Image
                    src={content.image}
                    alt={content.subTitle}
                    width={768}
                    height={512}
                    className="object-cover w-full rounded-xl overflow-hidden"
                  />
                )}
              </li>
            ))}
        </ul>
      </article>
      {posts.filter((post) => post.slug !== params.slug).length > 0 && (
        <section className="space-y-6">
          <h1 className="font-bold text-2xl">Outros Artigos</h1>
          <div className="space-y-6">
            {shuffleArray(posts)
              .filter((post) => post.slug !== params.slug)
              .slice(0, 5)
              .map((post) => (
                <Link href={`/post/${post.slug}`} key={post.id}>
                  <div className="sm:flex min-h-[150px] mb-6 gap-x-2 space-y-2 items-center">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={768}
                        height={512}
                        className="object-cover min-w-[250px] sm:max-w-[250px] w-full rounded-xl overflow-hidden"
                      />
                    )}

                    <div className="min-h-[150px] space-y-2 flex flex-col justify-evenly">
                      <h2 className="font-bold text-xl">{post.title}</h2>
                      <p className="text-muted text-md line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      )}
    </section>
  );
}
