import { MetadataRoute } from 'next';
import { profile } from '@/data/profile';
import { getSiteUrl } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...profile.projects.map((project) => ({
      url: `${siteUrl}/projects/${project.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
