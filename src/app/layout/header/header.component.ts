import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <nav class="nav-container">
        <a routerLink="/" class="logo">JA</a>
        
        <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-label]="isMenuOpen ? 'Close menu' : 'Open menu'">
          <fa-icon [icon]="isMenuOpen ? icons.close : icons.menu"></fa-icon>
        </button>

        <ul class="nav-links" [class.active]="isMenuOpen">
          <li><a routerLink="/home" routerLinkActive="active" (click)="closeMenu()">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a></li>
          <li><a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">Projects</a></li>
          <li><a routerLink="/skills" routerLinkActive="active" (click)="closeMenu()">Skills</a></li>
          <li><a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  icons = {
    menu: faBars,
    close: faTimes
  };

  constructor() {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
} 