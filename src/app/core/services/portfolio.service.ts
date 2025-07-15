import { Injectable } from '@angular/core';
import { portfolioData } from '../data/portfolio.data';
import {
  PortfolioData,
  PersonalInfo,
  About,
  Skills,
  Project,
  Experience
} from '../interfaces/portfolio.interface';

/**
 * Service responsible for managing and providing access to portfolio data
 */
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private data: PortfolioData = portfolioData;

  /**
   * Retrieves personal information
   * @returns Personal information including name, contact details, and social links
   */
  getPersonalInfo(): PersonalInfo {
    return this.data.personal;
  }

  /**
   * Retrieves about section information
   * @returns About information including summary and education history
   */
  getAboutInfo(): About {
    return this.data.about;
  }

  /**
   * Retrieves skills information
   * @returns Skills object containing technical skills categories
   */
  getSkills(): Skills {
    return this.data.skills;
  }

  /**
   * Retrieves projects information
   * @returns Array of projects with details and links
   */
  getProjects(): Project[] {
    return this.data.projects;
  }

  /**
   * Retrieves professional experience information
   * @returns Array of work experiences with details
   */
  getExperience(): Experience[] {
    return this.data.experience;
  }

  /**
   * Retrieves education information
   * @returns Array of educational and organizational roles
   */
  getEducation(): PortfolioData['education'] {
    return this.data.education;
  }
} 