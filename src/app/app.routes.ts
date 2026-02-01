import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Jetsetting with Kayla | Travel Planning' },
  { path: 'about', component: AboutPageComponent, title: 'About Kayla | Vacation Specialist' },
  { path: 'contact', component: ContactComponent, title: 'Contact Kayla | Start Planning' },
  { path: '**', redirectTo: '' },
];
