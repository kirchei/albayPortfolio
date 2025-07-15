import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioService } from '../../core/services/portfolio.service';
import {
  PersonalInfo,
  Project,
  Skills,
} from '../../core/interfaces/portfolio.interface';
import {
  faCode,
  faGraduationCap,
  faBriefcase,
  faEnvelope,
  faArrowRight,
  faAward,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Home component - Landing page of the portfolio
 * Displays hero section, featured projects, and skills overview
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <!-- Floating geometric shapes -->
      <div class="hero-shapes">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
      </div>

      <!-- Code decorative elements -->
      <div class="code-decoration">{{ '< developer />' }}</div>
      <div class="code-decoration">{{ 'function() { return awesome; }' }}</div>
      <div class="code-decoration">const skills = [&#39;Angular&#39;, &#39;React&#39;];</div>
      <div class="code-decoration">{{ '{ creativity: true }' }}</div>

      <div class="hero-content">
        <div class="intro-tag">{{ personal.title }}</div>
        <h1 class="title">
          Hi, I'm {{ personal.name }}
          <span class="wave" role="img" aria-label="waving hand">👋</span>
        </h1>
        <p class="subtitle">{{ personal.subtitle }}</p>
        <div class="cta-buttons">
          <a routerLink="/projects" class="cta-primary">
            View Projects
            <fa-icon [icon]="icons.arrowRight"></fa-icon>
          </a>
          <a routerLink="/contact" class="cta-secondary">
            Contact Me
            <fa-icon [icon]="icons.envelope"></fa-icon>
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="featured-projects">
      <div class="section-header">
        <h2>Featured Projects</h2>
        <p>Recent work I'm proud of</p>
      </div>
      <div class="projects-grid">
        @for (project of featuredProjects; track project.title) {
        <div class="project-card">
          <div class="project-preview">
            @if (project.imageUrl) {
            <div
              class="project-image"
              [style.backgroundImage]="'url(' + project.imageUrl + ')'"
            >
              <div class="image-overlay"></div>
            </div>
            }
            <div class="preview-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="tech-stack">
                @for (tech of project.technologies; track tech) {
                <span class="tech-pill">{{ tech }}</span>
                }
              </div>
            </div>
          </div>
          <div class="project-links">
            @if (project.githubUrl) {
            <a
              [href]="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="github-link"
            >
              Source
              <fa-icon [icon]="icons.code"></fa-icon>
            </a>
            } @if (project.liveUrl) {
            <a
              [href]="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="live-link"
            >
              View Demo
              <fa-icon [icon]="icons.arrowRight"></fa-icon>
            </a>
            }
          </div>
        </div>
        }
      </div>
      <div class="section-footer">
        <a routerLink="/projects" class="view-all">
          View All Projects
          <fa-icon [icon]="icons.chevronRight"></fa-icon>
        </a>
      </div>
    </section>

    <!-- Skills Overview -->
    <section class="skills-overview">
      <div class="section-header">
        <h2>Technical Skills</h2>
        <p>Technologies I work with</p>
      </div>
      <div class="skills-grid">
        @for (category of skills.technical; track category.category) {
        <div class="skill-category">
          <h3>{{ category.category }}</h3>
          <div class="skills-list">
            @for (skill of category.items; track skill) {
            <span class="skill-tag">{{ skill }}</span>
            }
          </div>
        </div>
        }
      </div>
      <div class="section-footer">
        <a routerLink="/skills" class="view-all">
          View All Skills
          <fa-icon [icon]="icons.chevronRight"></fa-icon>
        </a>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta">
      <div class="cta-content">
        <h2>Let's Create Something Amazing</h2>
        <p>Have a project in mind? I'd love to hear about it.</p>
        <div class="cta-buttons">
          <a routerLink="/contact" class="cta-primary">
            <fa-icon [icon]="icons.envelope"></fa-icon>
            Get in Touch
          </a>
          <a [href]="'mailto:' + personal.email" class="cta-secondary">
            {{ personal.email }}
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  personal: PersonalInfo;
  skills: Skills;
  featuredProjects: Project[];

  icons = {
    code: faCode,
    graduationCap: faGraduationCap,
    briefcase: faBriefcase,
    envelope: faEnvelope,
    arrowRight: faArrowRight,
    award: faAward,
    chevronRight: faChevronRight,
  };

  constructor(private portfolioService: PortfolioService) {
    this.personal = this.portfolioService.getPersonalInfo();
    this.skills = this.portfolioService.getSkills();
    this.featuredProjects = this.portfolioService.getProjects().slice(0, 3); // Show only first 3 projects
  }

  ngOnInit(): void {
    // Component initialization logic if needed
  }
}