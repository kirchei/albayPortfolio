import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioService } from '../../core/services/portfolio.service';
import {
  faBriefcase,
  faCode,
  faMapMarkerAlt,
  faCalendarAlt,
  faChevronRight,
  faExternalLinkAlt,
  faLightbulb,
  faUsers,
  faAward,
  faGraduationCap,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';

interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  link?: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

interface Leadership {
  position: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <section class="projects-section">
      <div class="container">
        <div class="section-intro">
          <span class="section-tag">Portfolio</span>
          <h2>Projects & Experience</h2>
          <p>Showcasing my journey through code and creativity</p>
        </div>

        <!-- Experience Section -->
        <div class="experience-container">
          <div class="experience-header">
            <h3>Professional Journey</h3>
            <div class="header-line"></div>
          </div>

          <div class="experience-list">
            @for (exp of experience; track exp.company) {
              <div class="experience-card">
                <div class="card-main-content">
                  <div class="role-info">
                    <h4>{{ exp.position }}</h4>
                    <span class="company">{{ exp.company }}</span>
                  </div>

                  <p class="description">{{ exp.description }}</p>

                  <div class="highlights">
                    @for (highlight of exp.highlights; track highlight) {
                      <div class="highlight-item">
                        <fa-icon [icon]="icons.chevron" class="highlight-icon"></fa-icon>
                        <span>{{ highlight }}</span>
                      </div>
                    }
                  </div>

                  @if (exp.technologies) {
                    <div class="tech-stack">
                      @for (tech of exp.technologies; track tech) {
                        <span class="tech-pill">{{ tech }}</span>
                      }
                    </div>
                  }

                  @if (exp.link) {
                    <a [href]="exp.link" target="_blank" rel="noopener noreferrer" class="company-link">
                      Visit Company
                      <fa-icon [icon]="icons.arrow" class="link-icon"></fa-icon>
                    </a>
                  }
                </div>
                
                <div class="card-side-info">
                  <span class="period">{{ exp.period }}</span>
                  <span class="location">{{ exp.location }}</span>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Projects Section -->
        <div class="projects-container">
          <div class="projects-header">
            <h3>Featured Projects</h3>
            <div class="header-line"></div>
          </div>

          <div class="projects-grid">
            @for (project of projects; track project.title) {
              <div class="project-card">
                <div class="project-preview">
                  @if (project.imageUrl) {
                    <div class="project-image" [style.backgroundImage]="'url(' + project.imageUrl + ')'">
                      <div class="image-overlay"></div>
                    </div>
                  }
                  <div class="preview-content">
                    <h4>{{ project.title }}</h4>
                    <div class="tech-stack">
                      @for (tech of project.technologies; track tech) {
                        <span class="tech-pill">{{ tech }}</span>
                      }
                    </div>
                  </div>
                </div>

                <div class="project-details">
                  <p class="description">{{ project.description }}</p>

                  <div class="highlights">
                    @for (highlight of project.highlights; track highlight) {
                      <div class="highlight-item">
                        <fa-icon [icon]="icons.chevron" class="highlight-icon"></fa-icon>
                        <span>{{ highlight }}</span>
                      </div>
                    }
                  </div>

                  <div class="project-actions" [class.single-button]="!project.liveUrl">
                    @if (project.githubUrl) {
                      <a [href]="project.githubUrl" target="_blank" rel="noopener noreferrer" class="github-link">
                        <fa-icon [icon]="icons.github"></fa-icon>
                        Source
                      </a>
                    }
                    @if (project.liveUrl) {
                      <a [href]="project.liveUrl" target="_blank" rel="noopener noreferrer" class="live-link">
                        <fa-icon [icon]="icons.external"></fa-icon>
                        Demo
                      </a>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Education & Training Section -->
        @if (education.length) {
          <div class="education-container">
            <div class="education-header">
              <h3>Education & Training</h3>
              <div class="header-line"></div>
            </div>

            <div class="education-grid">
              @for (program of education; track program.position) {
                <div class="education-card">
                  <div class="role-header">
                    <h4>{{ program.position }}</h4>
                    <span class="organization">{{ program.organization }}</span>
                  </div>

                  <div class="role-meta">
                    <span class="period">{{ program.period }}</span>
                    <span class="location">{{ program.location }}</span>
                  </div>

                  <div class="highlights">
                    @for (highlight of program.highlights; track highlight) {
                      <div class="highlight-item">
                        <fa-icon [icon]="icons.chevron" class="highlight-icon"></fa-icon>
                        <span>{{ highlight }}</span>
                      </div>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  experience = this.portfolioService.getExperience();
  projects = this.portfolioService.getProjects();
  education = this.portfolioService.getEducation();

  icons = {
    briefcase: faBriefcase,
    code: faCode,
    location: faMapMarkerAlt,
    calendar: faCalendarAlt,
    chevron: faChevronRight,
    external: faExternalLinkAlt,
    github: faGithub,
    lightbulb: faLightbulb,
    users: faUsers,
    award: faAward,
    education: faGraduationCap,
    arrow: faArrowRight
  };

  constructor(private portfolioService: PortfolioService) {}
} 