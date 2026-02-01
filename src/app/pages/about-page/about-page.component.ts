import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import {
  LucideAngularModule,
  Palmtree,
  MapPin,
  Anchor,
  Plane,
  Ship,
  Globe,
  LUCIDE_ICONS,
  LucideIconProvider,
} from 'lucide-angular';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      useValue: new LucideIconProvider({ Palmtree, MapPin, Anchor, Plane, Ship, Globe }),
    },
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {}
