import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about">
      <div class="about-content">
        <!-- Hero Section -->
        <div class="hero-section">
          <span class="section-tag">About Me</span>
          <h1>Building Digital Experiences</h1>
          <p class="subtitle">Full Stack Developer specializing in modern web technologies</p>
        </div>

        <!-- Profile Section -->
        <div class="profile-section">
          <div class="profile-content">
            <div class="profile-text">
              <p class="summary">{{ about.summary }}</p>
              <div class="quick-info">
                <div class="info-item">
                  <span class="label">Location</span>
                  <span class="value">{{ personal.location }}</span>
                </div>
                <div class="info-item">
                  <span class="label">Email</span>
                  <span class="value">{{ personal.email }}</span>
                </div>
                <div class="info-item">
                  <span class="label">Degree</span>
                  <span class="value">{{ about.education[0].degree }}</span>
                </div>
              </div>
            </div>
            <div class="profile-image-container">
              <img [src]="personal.profileImage" alt="Justine Carl Albay" class="profile-image">
              <div class="image-backdrop"></div>
            </div>
          </div>
        </div>

        <!-- Education Timeline -->
        <div class="education-timeline">
          <div class="section-header">
            <h2>Educational Journey</h2>
            <div class="header-line"></div>
          </div>
          
          <div class="timeline">
            @for (edu of about.education; track edu.institution) {
              <div class="timeline-item">
                <div class="timeline-content">
                  <div class="time-period">{{ edu.period }}</div>
                  <div class="institution-card">
                    <h3>{{ edu.institution }}</h3>
                    @if (edu.degree) {
                      <p class="degree">{{ edu.degree }}</p>
                    }
                    @if (edu.specialization) {
                      <p class="specialization">Specialization in {{ edu.specialization }}</p>
                    }
                    <ul class="achievements">
                      @for (achievement of edu.achievements; track achievement) {
                        <li>{{ achievement }}</li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Thesis Highlight -->
        @if (about.thesis) {
          <div class="thesis-highlight">
            <div class="section-header">
              <h2>Capstone Project</h2>
              <div class="header-line"></div>
            </div>
            <div class="thesis-content">
              <div class="thesis-card">
                <div class="thesis-header">
                  <div class="award-badge">
                    <span class="trophy">🏆</span>
                    <span class="award-text">Award Winner</span>
                  </div>
                  <h3>{{ about.thesis.title }}</h3>
                </div>
                <p class="award-details">{{ about.thesis.award }}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  about = this.portfolioService.getAboutInfo();
  personal = this.portfolioService.getPersonalInfo();

  constructor(private portfolioService: PortfolioService) {}
} 