import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App';
import { BLOG_ARTICLES, SERVICE_LANDINGS } from '../data/blogArticles';

const DOMAIN = 'https://nutricaoveterinariathais.com.br';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80';

export interface SeoData {
  title: string;
  description: string;
  canonicalUrl: string;
  h1: string;
  ogType: 'website' | 'article';
  ogImage: string;
  jsonLd: any[];
}

export function getSeoDataForPath(pathname: string): SeoData {
  const pathWithoutQuery = pathname.split('?')[0].split('#')[0];
  const cleanPath = pathWithoutQuery.replace(/\/+$/, '') || '/';

  // 1. Home Page
  if (cleanPath === '/') {
    const title = 'Consulta Nutricional Veterinária Online para Cães e Gatos | Dra. Thais Vieira';
    const description = 'Consulta nutricional veterinária online para cães e gatos. Planos personalizados de ração, alimentação natural, alimentação mista e manejo nutricional para necessidades específicas.';
    const canonicalUrl = `${DOMAIN}/`;
    const h1 = 'Consulta Nutricional Veterinária Online para Cães e Gatos';

    return {
      title,
      description,
      canonicalUrl,
      h1,
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'VeterinaryCare',
          'name': 'Dra. Thais Vieira | Nutrição Veterinária',
          'url': canonicalUrl,
          'image': DEFAULT_IMAGE,
          'description': description,
          'medicalSpecialty': 'Veterinary',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'São Paulo',
            'addressRegion': 'SP',
            'addressCountry': 'BR'
          },
          'founder': {
            '@type': 'Person',
            'name': 'Dra. Thais Vieira',
            'jobTitle': 'Médica Veterinária com pós-graduação em nutrição animal'
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Dra. Thais Vieira - Nutrição Veterinária',
          'url': canonicalUrl
        }
      ]
    };
  }

  // 2. Blog Index Page
  if (cleanPath === '/blog') {
    const title = 'Blog de Nutrição Veterinária | Dra. Thais Vieira';
    const description = 'Artigos e guias práticos sobre alimentação natural, escolha de ração, nutrição para gatos e filhotes por Dra. Thais Vieira.';
    const canonicalUrl = `${DOMAIN}/blog`;
    const h1 = 'Blog de Nutrição Veterinária';

    return {
      title,
      description,
      canonicalUrl,
      h1,
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          'name': title,
          'url': canonicalUrl,
          'description': description
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Início',
              'item': `${DOMAIN}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Blog',
              'item': canonicalUrl
            }
          ]
        }
      ]
    };
  }

  // 2.1 Escolha de Ração Landing Page
  if (cleanPath === '/escolha-de-racao') {
    const title = 'Escolha de Ração para Cães e Gatos | Dra. Thais Vieira';
    const description = 'Escolho a ração certa para o seu pet, a quantidade por dia e os petiscos. Atendimento online, R$ 150. Para quem acabou de adotar ou é de primeira viagem.';
    const canonicalUrl = `${DOMAIN}/escolha-de-racao`;
    const h1 = 'Escolha da ração ideal para o seu pet';

    return {
      title,
      description,
      canonicalUrl,
      h1,
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'serviceType': 'Orientação Nutricional Avulsa',
          'name': 'Escolha da ração ideal para o seu pet',
          'description': description,
          'offers': {
            '@type': 'Offer',
            'price': '150.00',
            'priceCurrency': 'BRL',
            'availability': 'https://schema.org/InStock'
          },
          'provider': {
            '@type': 'Person',
            'name': 'Dra. Thais Vieira',
            'jobTitle': 'Médica Veterinária com pós-graduação em nutrição animal',
            'url': DOMAIN
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'Vou ter que comprar uma ração cara?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Não necessariamente. Eu trabalho dentro do orçamento que você me disser. A ração adequada nem sempre é a mais cara, é a que atende as necessidades daquele pet.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Meu pet já come uma ração e parece bem. Vale a pena?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Vale, principalmente para conferir a quantidade. É muito comum o tutor oferecer mais ou menos do que o pet precisa sem saber, e isso só aparece depois de um tempo.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Serve para gato?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Serve. E vale bastante, porque gato tem exigências nutricionais bem diferentes das do cachorro, e a ração felina acaba sendo escolhida errada com frequência.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Meu pet tem uma doença. Serve para ele?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Nesse caso não. A dieta precisa ser calculada individualmente, então o indicado é a consulta nutricional completa.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Em quanto tempo eu recebo o plano?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Em até 48 horas depois do nosso atendimento.'
              }
            }
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Início',
              'item': `${DOMAIN}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Escolha de Ração',
              'item': canonicalUrl
            }
          ]
        }
      ]
    };
  }

  // 3. Blog Post Page (/blog/:slug)
  if (cleanPath.startsWith('/blog/')) {
    const articleSlug = cleanPath.replace('/blog/', '');
    const article = BLOG_ARTICLES.find(
      (a) => a.slug === articleSlug || (a.aliases && a.aliases.includes(articleSlug))
    );

    if (article) {
      const title = article.metaTitle || `${article.title} | Dra. Thais Vieira`;
      const description = article.metaDescription;
      const canonicalUrl = `${DOMAIN}/blog/${article.slug}`;
      const h1 = article.title;
      const authorName = article.author?.name || 'Dra. Thais Vieira';
      const publishDate = article.publishDate || '2026-07-20';

      return {
        title,
        description,
        canonicalUrl,
        h1,
        ogType: 'article',
        ogImage: DEFAULT_IMAGE,
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': canonicalUrl
            },
            'headline': article.title,
            'description': article.metaDescription,
            'image': [DEFAULT_IMAGE],
            'datePublished': publishDate,
            'dateModified': publishDate,
            'author': {
              '@type': 'Person',
              'name': authorName,
              'jobTitle': 'Médica Veterinária com pós-graduação em nutrição animal',
              'url': DOMAIN
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'Dra. Thais Vieira | Nutrição Veterinária',
              'url': DOMAIN,
              'logo': {
                '@type': 'ImageObject',
                'url': `${DOMAIN}/icon.svg`
              }
            },
            'articleSection': article.category,
            'keywords': [article.mainKeyword, ...article.secondaryKeywords].join(', ')
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Início',
                'item': `${DOMAIN}/`
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Blog',
                'item': `${DOMAIN}/blog`
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': article.title,
                'item': canonicalUrl
              }
            ]
          }
        ]
      };
    }
  }

  // 4. Commercial Landing Pages (e.g. /nutricao-pet-online, /alimentacao-natural-para-caes, etc.)
  const serviceKey = cleanPath.replace(/^\//, '');
  if (serviceKey && SERVICE_LANDINGS[serviceKey]) {
    const landing = SERVICE_LANDINGS[serviceKey];
    const title = landing.title;
    const description = landing.description;
    const canonicalUrl = `${DOMAIN}/${landing.slug}`;
    const h1 = landing.headline;

    const jsonLd: any[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Nutrição Veterinária',
        'name': landing.title,
        'description': landing.description,
        'offers': {
          '@type': 'Offer',
          'price': '200.00',
          'priceCurrency': 'BRL',
          'availability': 'https://schema.org/InStock'
        },
        'provider': {
          '@type': 'Person',
          'name': 'Dra. Thais Vieira',
          'jobTitle': 'Médica Veterinária com pós-graduação em nutrição animal',
          'url': DOMAIN
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Início',
            'item': `${DOMAIN}/`
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': landing.title.split('|')[0].trim(),
            'item': canonicalUrl
          }
        ]
      }
    ];

    if (landing.faqs && landing.faqs.length > 0) {
      jsonLd.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': landing.faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      });
    }

    return {
      title,
      description,
      canonicalUrl,
      h1,
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      jsonLd
    };
  }

  // Check if root-level slug matches any article slug/alias
  const matchingArticle = BLOG_ARTICLES.find(
    (a) => a.slug === serviceKey || (a.aliases && a.aliases.includes(serviceKey))
  );

  if (matchingArticle) {
    const title = matchingArticle.metaTitle || `${matchingArticle.title} | Dra. Thais Vieira`;
    const description = matchingArticle.metaDescription;
    const canonicalUrl = `${DOMAIN}/blog/${matchingArticle.slug}`;
    const h1 = matchingArticle.title;
    const authorName = matchingArticle.author?.name || 'Dra. Thais Vieira';
    const publishDate = matchingArticle.publishDate || '2026-07-20';

    return {
      title,
      description,
      canonicalUrl,
      h1,
      ogType: 'article',
      ogImage: DEFAULT_IMAGE,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': canonicalUrl
          },
          'headline': matchingArticle.title,
          'description': matchingArticle.metaDescription,
          'image': [DEFAULT_IMAGE],
          'datePublished': publishDate,
          'dateModified': publishDate,
          'author': {
            '@type': 'Person',
            'name': authorName,
            'jobTitle': 'Médica Veterinária com pós-graduação em nutrição animal',
            'url': DOMAIN
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Dra. Thais Vieira | Nutrição Veterinária',
            'url': DOMAIN,
            'logo': {
              '@type': 'ImageObject',
              'url': `${DOMAIN}/icon.svg`
            }
          },
          'articleSection': matchingArticle.category,
          'keywords': [matchingArticle.mainKeyword, ...matchingArticle.secondaryKeywords].join(', ')
        }
      ]
    };
  }

  // Fallback for unknown routes
  const title = 'Consulta Nutricional Veterinária Online para Cães e Gatos | Dra. Thais Vieira';
  const description = 'A consulta nutricional veterinária online para cães e gatos com a Dra. Thais Vieira oferece nutrição veterinária, alimentação natural, dieta para cão renal, gato com doença renal, alergias, obesidade e indicação de ração.';
  const canonicalUrl = `${DOMAIN}${cleanPath}`;
  const h1 = 'Consulta Nutricional Veterinária Online para Cães e Gatos';

  return {
    title,
    description,
    canonicalUrl,
    h1,
    ogType: 'website',
    ogImage: DEFAULT_IMAGE,
    jsonLd: []
  };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function renderPageHtml(pathname: string, templateHtml: string): string {
  const seo = getSeoDataForPath(pathname);

  // 1. Render App to static markup for this URL
  let appHtml = '';
  try {
    appHtml = renderToString(<App initialPath={pathname} />);
  } catch (err) {
    console.error('SSR Render Error:', err);
    appHtml = '';
  }

  // 2. Prepare head metadata elements
  const headElements = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<link rel="canonical" href="${escapeHtml(seo.canonicalUrl)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(seo.canonicalUrl)}" />`,
    `<meta property="og:type" content="${seo.ogType}" />`,
    `<meta property="og:image" content="${escapeHtml(seo.ogImage)}" />`,
    `<meta property="og:site_name" content="Dra. Thais Vieira | Nutrição Veterinária" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(seo.ogImage)}" />`,
    ...seo.jsonLd.map(
      (data) => `<script type="application/ld+json">${JSON.stringify(data)}</script>`
    )
  ].join('\n    ');

  // Replace default title and description in templateHtml if they exist, or inject into <head>
  let html = templateHtml;

  if (html.includes('<title>')) {
    html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(seo.title)}</title>`);
  } else {
    html = html.replace('</head>', `  <title>${escapeHtml(seo.title)}</title>\n</head>`);
  }

  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description"[^>]*\/?>/s, `<meta name="description" content="${escapeHtml(seo.description)}" />`);
  }

  // Inject remaining head tags (canonical, OG, JSON-LD) before </head>
  const tagsToInject = [
    !html.includes('<meta name="description"') ? `<meta name="description" content="${escapeHtml(seo.description)}" />` : '',
    `<link rel="canonical" href="${escapeHtml(seo.canonicalUrl)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(seo.canonicalUrl)}" />`,
    `<meta property="og:type" content="${seo.ogType}" />`,
    `<meta property="og:image" content="${escapeHtml(seo.ogImage)}" />`,
    `<meta property="og:site_name" content="Dra. Thais Vieira | Nutrição Veterinária" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(seo.ogImage)}" />`,
    ...seo.jsonLd.map(
      (data) => `<script type="application/ld+json">${JSON.stringify(data)}</script>`
    )
  ].filter(Boolean).join('\n    ');

  html = html.replace('</head>', `    ${tagsToInject}\n  </head>`);

  // Replace <div id="root"></div> with rendered React App HTML
  if (appHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  }

  return html;
}
