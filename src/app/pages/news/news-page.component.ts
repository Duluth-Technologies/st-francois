import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NEWS } from './news.store';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {
  protected readonly news = NEWS;
}
