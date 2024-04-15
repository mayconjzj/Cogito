import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MetadataRoute.Sitemap = [];

  sitemap.push({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    lastModified: new Date()
  });

  return sitemap;
}
