import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Jetsetting with Kayla | Travel Planning' },
  { path: 'about', component: AboutPageComponent, title: 'About Kayla | Vacation Specialist' },
  { path: '**', redirectTo: '' },
];
