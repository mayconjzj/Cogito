import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/config/posts';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  return (
    <main className="space-y-12">
      <article className="space-y-3">
        <Link href="/" className="text-primary hover:underline">
          Voltar
        </Link>
        {post?.image && (
          <div className="flex w-full h-[200px] sm:h-[450px] relative rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="space-y-6 text-justify">
          <h1 className="font-black text-primary text-4xl">{post?.title}</h1>

          <p>{post?.description}</p>

          {post?.contents &&
            post.contents.map((content) => (
              <div key={content.subTitle} className="space-y-6 text-justify">
                <h2 className="font-black text-primary text-3xl">
                  {content.subTitle}
                </h2>
                <div className="space-y-3">
                  {content.descriptions?.map((description) => (
                    <p key={description}>{description}</p>
                  ))}
                </div>
                {content.image && (
                  <div className="flex w-full h-[200px] sm:h-[450px] relative rounded-2xl overflow-hidden">
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
          <div>
            <p>
              Publicado por: <span className="font-bold">{post?.autor}</span>
            </p>
            <p>
              Data:
              <span className="text-sm text-muted">{post?.date}</span>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
