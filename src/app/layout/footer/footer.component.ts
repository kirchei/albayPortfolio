import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faMedium 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faArrowUp 
} from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ScrollToTopComponent } from "../navigation/scroll-to-top.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, ScrollToTopComponent],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <app-scroll-to-top></app-scroll-to-top>

        <div class="footer-main">
          <!-- Brand -->
          <div class="footer-brand">
            <h2 class="logo">JA</h2>
            <p class="tagline">Building digital experiences with passion and purpose</p>
          </div>

          <!-- Quick Links -->
          <div class="footer-links">
            <h3>Quick Links</h3>
            <nav>
              <a routerLink="/home">Home</a>
              <a routerLink="/about">About</a>
              <a routerLink="/projects">Projects</a>
              <a routerLink="/skills">Skills</a>
              <a routerLink="/contact">Contact</a>
            </nav>
          </div>

          <!-- Connect -->
          <div class="footer-connect">
            <h3>Let's Connect</h3>
            <div class="social-links">
              <a [href]="personal.socialLinks.github" target="_blank" rel="noopener noreferrer" title="GitHub">
                <fa-icon [icon]="icons.github"></fa-icon>
              </a>
              <a [href]="personal.socialLinks.linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <fa-icon [icon]="icons.linkedin"></fa-icon>
              </a>
              <a [href]="'mailto:' + personal.email" title="Email">
                <fa-icon [icon]="icons.email"></fa-icon>
              </a>
            </div>
            <a [href]="'mailto:' + personal.email" class="email-link">{{ personal.email }}</a>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Justine Albay. All rights reserved.</p>
          <p class="location">{{ personal.location }}</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  personal = this.portfolioService.getPersonalInfo();

  icons = {
    github: faGithub,
    linkedin: faLinkedin,
    email: faEnvelope,
    arrowUp: faArrowUp
  };

  constructor(private portfolioService: PortfolioService) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
} 