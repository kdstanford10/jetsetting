import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutPageComponent } from './pages/about-page/about-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', redirectTo: '' },
];
