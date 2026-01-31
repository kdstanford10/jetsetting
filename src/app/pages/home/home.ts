import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { ServicesGridComponent } from '../../components/services-grid/services-grid';
import { ContactFormComponent } from '../../components/contact-form/contact-form';
import { AboutComponent } from '../../components/about/about';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesGridComponent, ContactFormComponent, AboutComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
