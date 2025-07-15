import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <button
      *ngIf="showButton"
      class="scroll-to-top"
      (click)="scrollToTop()"
      aria-label="Scroll to top"
    >
      <fa-icon [icon]="icon"></fa-icon>
    </button>
  `,
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  showButton = false;
  icon = faArrowUp;

  @HostListener('window:scroll')
  onScroll() {
    this.showButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
