import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findNewsBySlug } from './news.store';

@Component({
  selector: 'app-news-article-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news-article-page.component.html',
  styleUrl: './news-article-page.component.css'
})
export class NewsArticlePageComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly article = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    return findNewsBySlug(slug) || null;
  });

  protected readonly articleHtml = computed(() => {
    const article = this.article();
    if (!article) {
      return '<p>Actualité introuvable.</p>';
    }
    return article.html;
  });
}
