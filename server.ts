import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import cors from "cors";
import { renderPageHtml } from "./src/server/seoRenderer";
import { BLOG_ARTICLES, SERVICE_LANDINGS } from "./src/data/blogArticles";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const DOMAIN = 'https://nutricaoveterinariathais.com.br';

async function startServer() {
  const app = express();
  app.use(express.json());
  app.use(cors());

  // Health check endpoint for uptime monitors and Google Ads crawlers
  app.get("/healthz", (_req, res) => {
    res.status(200).send("OK");
  });

  // 301 Redirect for legacy routes
  app.get("/consulta-primeiro-pet", (req, res) => {
    res.redirect(301, "/escolha-de-racao");
  });

  // SEO Routes: robots.txt
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`);
  });

  // SEO Routes: sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");

    const staticUrls = [
      `${DOMAIN}/`,
      `${DOMAIN}/blog`,
      `${DOMAIN}/escolha-de-racao`,
      `${DOMAIN}/politica-de-privacidade`,
      `${DOMAIN}/termos`
    ];

    const articleUrls = BLOG_ARTICLES.map((a) => `${DOMAIN}/blog/${a.slug}`);
    const landingUrls = Object.keys(SERVICE_LANDINGS).map((slug) => `${DOMAIN}/${slug}`);

    const allUrls = Array.from(new Set([...staticUrls, ...articleUrls, ...landingUrls]));

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === DOMAIN + '/' ? '1.0' : url.includes('/blog/') ? '0.8' : '0.9'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    res.send(xml);
  });

  // Vite middleware for development vs Production static + SSR handling
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      if (req.originalUrl.startsWith("/api")) return next();
      try {
        const indexHtmlPath = path.resolve(process.cwd(), "index.html");
        let template = fs.readFileSync(indexHtmlPath, "utf-8");
        template = await vite.transformIndexHtml(req.originalUrl, template);
        const html = renderPageHtml(req.originalUrl, template);
        res.status(200).set({ "Content-Type": "text/html" }).send(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    const indexHtmlPath = path.join(distPath, 'index.html');
    
    app.use(express.static(distPath, { index: false }));

    app.get('*', (req, res, next) => {
      if (req.originalUrl.startsWith('/api')) return next();
      try {
        let indexTemplate = '';
        if (fs.existsSync(indexHtmlPath)) {
          indexTemplate = fs.readFileSync(indexHtmlPath, 'utf-8');
        }
        const html = renderPageHtml(req.originalUrl, indexTemplate);
        res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
      } catch (e) {
        console.error('SSR error in production:', e);
        res.sendFile(indexHtmlPath);
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
