import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  structuredData?: Record<string, unknown>;
  robots?: string;
};

export default function Seo({ title, description, path, keywords = [], structuredData, robots = 'index, follow, max-image-preview:large' }: SeoProps) {
  const keywordString = keywords.join(', ');
  const structuredDataString = structuredData ? JSON.stringify(structuredData) : '';

  useEffect(() => {
    document.title = title;
    const setMeta = (name: string, content: string, attr = 'name') => {
      let element = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta('description', description);
    setMeta('robots', robots);
    setMeta('keywords', keywordString);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:image', 'https://cbdscrapcarremoval.com.au/images/hero-bg.jpg', 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('og:url', `https://cbdscrapcarremoval.com.au${path}`, 'property');
    setMeta('twitter:card', 'summary_large_image');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://cbdscrapcarremoval.com.au${path}`;

    let schema = document.getElementById('page-structured-data');
    if (structuredData) {
      if (!schema) {
        schema = document.createElement('script');
        schema.id = 'page-structured-data';
        schema.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schema);
      }
      schema.textContent = structuredDataString;
    } else if (schema) {
      schema.remove();
    }
  }, [title, description, path, keywordString, structuredDataString, robots]);

  return null;
}
