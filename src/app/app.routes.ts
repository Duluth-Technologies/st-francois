import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { NewsPageComponent } from './pages/news/news-page.component';
import { NewsArticlePageComponent } from './pages/news/news-article-page.component';
import { SupportPageComponent } from './pages/support/support-page.component';
import { InformationPageComponent } from './pages/information/information-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { LegalPageComponent } from './pages/legal/legal-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'actualites', component: NewsPageComponent },
  { path: 'actualites/:slug', component: NewsArticlePageComponent },
  { path: 'soutenez-nous', component: SupportPageComponent },
  { path: 'informations-pratiques', component: InformationPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'mentions-legales', component: LegalPageComponent },
  { path: '**', redirectTo: '' }
];
