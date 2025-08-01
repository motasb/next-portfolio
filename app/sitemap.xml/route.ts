// app/sitemap.xml/route.ts

export async function GET() {
  const baseUrl = 'https://next-portfolio-pi-bay.vercel.app' // ← غيره لدومينك الفعلي

  const routes = [
    '/',
    '/#about',
    '/#skills',
    '/#projects',
    '/#contact',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `
      )
      .join('')}
  </urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
