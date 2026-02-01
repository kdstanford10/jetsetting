import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LucideAngularModule, Menu, X, LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, NgOptimizedImage, LucideAngularModule],
  providers: [{ provide: LUCIDE_ICONS, useValue: new LucideIconProvider({ Menu, X }) }],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private router = inject(Router);

  isScrolled = false;
  isMenuOpen = false;
  isHomePage = signal<boolean>(true);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage.set(event.url === '/' || event.urlAfterRedirects === '/');
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
