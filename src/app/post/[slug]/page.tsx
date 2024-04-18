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
    <>
      <article className="max-w-[1080px] m-auto pb-10 bg-primary p-4">
        <div className="space-y-6 pb-10 border-b-border border-b-[0.5px]">
          <Link href="/" className="text-muted text-md hover:text-foreground">
            Voltar
          </Link>
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
              className="object-cover w-full max-h-[550px]"
            />
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
                <h2 className="font-bold text-2xl">{content.subTitle}</h2>
                <div className="space-y-3">
                  {content.descriptions?.map((description) => (
                    <p className="md:text-xl text-lg" key={description}>
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
                    className="object-cover w-full max-h-[550px] "
                  />
                )}
              </div>
            ))}
        </div>
      </article>
      {posts.filter((post) => post.slug !== params.slug).length > 0 && (
        <section className="space-y-6 max-w-[1080px] m-auto bg-primary p-4">
          <h1 className="font-bold text-2xl">Outros Artigos</h1>
          <div className="space-y-6">
            {posts
              .filter((post) => post.slug !== params.slug)
              .slice(0, 5)
              .map((post) => (
                <div
                  className="sm:flex gap-x-2 space-y-2 items-center"
                  key={post.id}
                >
                  <Link href={`/post/${post.slug}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={768}
                      height={512}
                      className="object-cover min-w-[250px] h-[150px] w-full"
                    />
                  </Link>
                  <div className="h-[150px] space-y-2 flex flex-col justify-evenly">
                    <Link href={`/post/${post.slug}`}>
                      <h2 className="font-bold text-xl">{post.title}</h2>
                    </Link>
                    <p className="text-muted text-md line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}
    </>
  );
}
