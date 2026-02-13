import { marked } from 'marked';
import { NEWS_ARTICLES, type NewsArticleSource } from './generated/news.generated';

export interface NewsArticle extends NewsArticleSource {
  dateLabel: string;
  html: string;
}

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

marked.setOptions({ gfm: true, breaks: false });

function toDateLabel(value: string): string {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return dateFormatter.format(date);
}

function toHtml(markdown: string): string {
  return marked.parse(markdown) as string;
}

export const NEWS: NewsArticle[] = NEWS_ARTICLES.map((item) => ({
  ...item,
  dateLabel: toDateLabel(item.date),
  html: toHtml(item.markdown)
}));

export function findNewsBySlug(slug: string): NewsArticle | undefined {
  return NEWS.find((item) => item.slug === slug);
}
