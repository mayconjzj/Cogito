import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/config/posts';

import { CardPost } from '@/components/ui/card-post';

export default function Home() {
  const postRandom = posts[Math.floor(Math.random() * posts.length)];

  return (
    <main className="space-y-12">
      <section className="flex flex-wrap gap-8 items-center justify-center pb-10 border-b-border border-b-[0.5px]">
        <Link
          href={`/post/${postRandom.slug}`}
          className="flex w-full max-w-[544px] h-[200px] sm:h-[344px] relative rounded-md overflow-hidden"
        >
          <Image
            src={postRandom.image}
            alt={postRandom.title}
            fill
            className="object-cover"
          />
        </Link>

        <div className="flex flex-col flex-1 gap-y-6">
          <Link href={`/post/${postRandom.slug}`}>
            <h2 className="font-black text-4xl text-primary line-clamp-2">
              {postRandom.title}
            </h2>
          </Link>
          <p className="text-muted line-clamp-[7]">{postRandom.description}</p>

          <div>
            <p className="text-muted text-sm">{postRandom.date}</p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-3 justify-evenly">
        {posts.map((post) => (
          <CardPost.Root key={post.id}>
            <Link
              href={`/post/${post.slug}`}
              className="flex w-full h-[200px] relative rounded-md overflow-hidden"
            >
              <CardPost.Image src={post.image} alt={post.title} />
            </Link>
            <CardPost.Content>
              <Link href={`/post/${post.slug}`}>
                <CardPost.Title>{post.title}</CardPost.Title>
              </Link>
              <CardPost.Description>{post.description}</CardPost.Description>
              <CardPost.Date date={post.date} />
            </CardPost.Content>
          </CardPost.Root>
        ))}
      </section>
    </main>
  );
}
