import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { 
  faEnvelope, 
  faPhone,
  faPaperPlane,
  faSpinner,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule, NgIf],
  template: `
    <section class="contact">
      <div class="contact-content">
        <div class="section-intro">
          <span class="section-tag">Contact</span>
          <h2>Let's Connect</h2>
          <p class="subtitle">Let's create something amazing together</p>
        </div>

        <div class="contact-wrapper">
          <!-- Contact Form -->
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
            <div class="form-header">
              <h3>Send me a message</h3>
              <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>

            <div class="form-body">
              <div class="form-group">
                <label for="name">Name</label>
                <div class="input-wrapper">
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name" 
                    placeholder="John Smith"
                    [class.error]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                  >
                  <div class="error-message" *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                    Please enter your name
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <div class="input-wrapper">
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email" 
                    placeholder="johnsmith@domain.com"
                    [class.error]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                  >
                  <div class="error-message" *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                    Please enter a valid email address
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <div class="input-wrapper">
                  <textarea 
                    id="message" 
                    formControlName="message" 
                    rows="5" 
                    placeholder="Hey Justine, I would like to discuss..."
                    [class.error]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                  ></textarea>
                  <div class="error-message" *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
                    Please enter your message
                  </div>
                </div>
              </div>

              <button type="submit" [disabled]="!contactForm.valid || isSubmitting" class="submit-button">
                <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                <fa-icon [icon]="isSubmitting ? icons.spinner : icons.send" [class.spin-animation]="isSubmitting"></fa-icon>
              </button>
            </div>
          </form>

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="info-card location">
              <fa-icon [icon]="icons.location" class="icon"></fa-icon>
              <h4>Location</h4>
              <p>{{ personal.location }}</p>
            </div>

            <div class="info-card email">
              <fa-icon [icon]="icons.email" class="icon"></fa-icon>
              <h4>Email</h4>
              <a [href]="'mailto:' + personal.email">{{ personal.email }}</a>
            </div>

            <div class="info-card phone">
              <fa-icon [icon]="icons.phone" class="icon"></fa-icon>
              <h4>Phone</h4>
              <a [href]="'tel:' + personal.phone">{{ personal.phone }}</a>
            </div>

            <div class="social-links">
              <a [href]="personal.socialLinks.github" target="_blank" rel="noopener noreferrer" class="social-link github">
                <fa-icon [icon]="icons.github"></fa-icon>
                <span>GitHub</span>
              </a>
              <a [href]="personal.socialLinks.linkedin" target="_blank" rel="noopener noreferrer" class="social-link linkedin">
                <fa-icon [icon]="icons.linkedin"></fa-icon>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  personal = this.portfolioService.getPersonalInfo();
  isSubmitting = false;
  
  // Private icon map
private contactIcons: { [key: string]: IconDefinition } = {
  location: faLocationArrow,
  email: faEnvelope,
  phone: faPhone,
  github: faGithub,
  linkedin: faLinkedin,
  send: faPaperPlane,
  spinner: faSpinner
};

// Public icons object for template binding
icons = {
  location: this.contactIcons['location'],
  email: this.contactIcons['email'],
  phone: this.contactIcons['phone'],
  github: this.contactIcons['github'],
  linkedin: this.contactIcons['linkedin'],
  send: this.contactIcons['send'],
  spinner: this.contactIcons['spinner']
};

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  constructor(private portfolioService: PortfolioService) {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        console.log(this.contactForm.value);
        this.isSubmitting = false;
        this.contactForm.reset();
      }, 2000);
    }
  }
  ngOnInit() {
  console.log('Icons:', this.icons);
}

} 