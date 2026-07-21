export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://next-portfolio-pi-bay.vercel.app/sitemap.xml",
  };
}