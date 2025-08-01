// app/sitemap.ts/route.ts

import { MetadataRoute } from 'next'

export async function GET(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://your-domain.com' // ← غيّره لدومينك الحقيقي

  const staticRoutes = [
    '',            // /
    '/#about',
    '/#skills',
    '/#projects',
    '/#contact',
  ]

  const urls = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }))

  return urls
}
