import Image from 'next/image';
import Link from 'next/link';

import { PostProps } from '@/config/posts';

import { Badge } from './badge';

export const PostCard = ({ post }: { post: PostProps }) => {
  return (
    <div className="space-y-3 w-[350px]">
      {post.image && (
        <Link href={`/post/${post.slug}`}>
          <Image
            src={`${post.image}`}
            alt={post.title}
            width={768}
            height={512}
            className="object-cover w-full overflow-hidden rounded-xl"
          />
        </Link>
      )}
      <div>
        <Badge category={post.category}>
          {post.category == 'personal-finances' && 'Finanças pessoais'}
          {post.category == 'debts' && 'Quitar dívidas'}
          {post.category == 'investments' && 'Investimentos'}
        </Badge>
      </div>
      <div className="px-3 space-y-3 ">
        <Link href={`/post/${post.slug}`}>
          <h1 className="font-bold text-lg line-clamp-3">{post.title}</h1>
        </Link>
        <p className="text-muted text-sm leading-6 line-clamp-[7]">
          {post.description}
        </p>
      </div>
    </div>
  );
};
