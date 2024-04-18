import { MetadataRoute } from 'next';

import { posts } from '@/config/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MetadataRoute.Sitemap = [];

  sitemap.push({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    lastModified: new Date()
  });

  posts.forEach((post) => {
    sitemap.push({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${post.slug}`,
      lastModified: new Date()
    });
  });

  return sitemap;
}
