import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faCode, 
  faDatabase, 
  faCloud, 
  faMobile, 
  faServer, 
  faGlobe,
  faTerminal,
  faCogs,
  faNetworkWired,
  faCodeBranch,
  faFileCode,
  faPaintBrush,
  faPalette,
  faImage,
  faFilm,
  faObjectGroup,
  faRocket,
  faCode as faCodeSolid,
  faLightbulb,
  faCubes,
  faWandMagicSparkles,
  faGears,
  faDisplay,
  faMicrochip,
  faFlask,
  faBrain,
  faHandshake,
  faUserGear,
  faComments,
  faClock,
  faChartLine,
  faUsers,
  faBookOpen,
  faPersonRunning,
  faUserCheck,
  faListCheck
} from '@fortawesome/free-solid-svg-icons';
import { 
  faAngular, 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3, 
  faGit, 
  faNode, 
  faPython, 
  faJava,
  faDocker,
  faAws,
  faLinux,
  faPhp,
  faSass,
  faBootstrap,
  faVuejs,
  faGithub,
  faWindows,
  faFigma,
  faAndroid,
  faAppStore,
  faUnity
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <section class="skills">
      <div class="skills-content">
        <div class="section-intro">
          <span class="section-tag">Skills</span>
          <h2>Technical Skills</h2>
        </div>
        <div class="skills-grid">
          @for (category of sortedTechnicalSkills; track category.category) {
            <div class="skill-category">
              <div class="category-header">
                <fa-icon [icon]="getCategoryIcon(category.category)" class="category-icon"></fa-icon>
                <h3>{{ category.category }}</h3>
              </div>
              <ul>
                @for (item of category.sortedItems; track item.name) {
                  <li class="skill-item">
                    <fa-icon [icon]="getSkillIcon(item.name)" class="skill-icon"></fa-icon>
                    <span class="skill-name">{{ item.name }}</span>
                    <div class="skill-bar">
                      <div class="skill-progress" [style.width]="item.proficiency + '%'"></div>
                    </div>
                  </li>
                }
              </ul>
            </div>
          }
        </div>

        <h2 class="soft-skills-title">Professional Skills</h2>
        <div class="skills-grid">
          @for (category of sortedSoftSkills; track category.category) {
            <div class="skill-category">
              <div class="category-header">
                <fa-icon [icon]="getSoftSkillCategoryIcon(category.category)" class="category-icon"></fa-icon>
                <h3>{{ category.category }}</h3>
              </div>
              <ul>
                @for (item of category.items; track item.name) {
                  <li class="skill-item">
                    <fa-icon [icon]="getSoftSkillIcon(item.name)" class="skill-icon"></fa-icon>
                    <span class="skill-name">{{ item.name }}</span>
                    <div class="skill-bar">
                      <div class="skill-progress" [style.width]="item.proficiency + '%'"></div>
                    </div>
                  </li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = this.portfolioService.getSkills();
  sortedTechnicalSkills: any[] = [];
  sortedSoftSkills: any[] = [];

  // Technical skills proficiency map
  private technicalSkillsProgress: { [key: string]: number } = {
    'HTML': 95,
    'Angular': 90,
    'JavaScript': 90,
    'VS Code': 90,
    'TypeScript': 85,
    'CSS': 85,
    'Git': 85,
    'Node.js': 85,
    'MySQL': 85,
    'Linux': 85,
    'GitHub': 85,
    'Bootstrap': 85,
    'Material-UI': 85,
    'REST APIs': 85,
    'SQL': 85,
    'Python': 80,
    'MongoDB': 80,
    'Docker': 80,
    'Express.js': 80,
    'PostgreSQL': 80,
    'C#': 80,
    'Flutter': 80,
    'Next.js': 80,
    'Figma': 80,
    'React': 80,
    'Java': 75,
    'AWS': 75,
    'C++': 75,
    'Dart': 75,
    'Ionic': 75,
    'Adobe Photoshop': 75,
    'Adobe Illustrator': 70,
    'Adobe Animate': 70
  };

  // Soft skills data with sorted items
  softSkills = [
    {
      category: 'Work Ethics',
      items: [
        { name: 'Independent Work', proficiency: 95 },
        { name: 'Continuous Learning', proficiency: 95 },
        { name: 'Adaptability', proficiency: 90 },
        { name: 'Time Management', proficiency: 90 }
      ].sort((a, b) => b.proficiency - a.proficiency)
    },
    {
      category: 'Professional Growth',
      items: [
        { name: 'Quick Learner', proficiency: 95 },
        { name: 'Problem Solving', proficiency: 90 },
        { name: 'Analytical Thinking', proficiency: 90 },
        { name: 'Initiative Taking', proficiency: 85 }
      ].sort((a, b) => b.proficiency - a.proficiency)
    },
    {
      category: 'Collaboration',
      items: [
        { name: 'Team Communication', proficiency: 85 },
        { name: 'Project Management', proficiency: 85 },
        { name: 'Cross-functional Collaboration', proficiency: 85 },
        { name: 'Mentorship', proficiency: 80 }
      ].sort((a, b) => b.proficiency - a.proficiency)
    }
  ];
  
  // Icons mapping with proper type definitions
  private categoryIcons: { [key: string]: IconDefinition } = {
    'Frontend Development': faDisplay,
    'Backend Development': faServer,
    'Database': faDatabase,
    'Cloud & DevOps': faCloud,
    'Mobile Development': faMobile,
    'Tools & Others': faGears,
    'Web Development': faGlobe,
    'Programming Languages': faMicrochip,
    'Frameworks': faCubes,
    'Development Tools': faWandMagicSparkles,
    'Version Control': faCodeBranch,
    'Infrastructure': faNetworkWired,
    'Design Tools': faPalette,
    'Testing': faFlask
  };

  private softSkillCategoryIcons: { [key: string]: IconDefinition } = {
    'Work Ethics': faUserCheck,
    'Professional Growth': faChartLine,
    'Collaboration': faUsers
  };

  private softSkillIcons: { [key: string]: IconDefinition } = {
    'Independent Work': faUserGear,
    'Adaptability': faPersonRunning,
    'Continuous Learning': faBookOpen,
    'Time Management': faClock,
    'Quick Learner': faLightbulb,
    'Problem Solving': faBrain,
    'Analytical Thinking': faGears,
    'Initiative Taking': faRocket,
    'Team Communication': faComments,
    'Project Management': faListCheck,
    'Mentorship': faHandshake,
    'Cross-functional Collaboration': faUsers
  };

  private skillIcons: { [key: string]: IconDefinition } = {
    // Frontend
    'Angular': faAngular,
    'React': faReact,
    'Vue.js': faVuejs,
    'Next.js': faReact,
    'JavaScript': faJs,
    'TypeScript': faCodeSolid,
    'HTML': faHtml5,
    'CSS': faCss3,
    'SASS': faSass,
    'Bootstrap': faBootstrap,
    'Material-UI': faObjectGroup,
    'Tailwind CSS': faCss3,
    
    // Backend
    'Node.js': faNode,
    'Express.js': faNode,
    'Python': faPython,
    'Django': faPython,
    'Java': faJava,
    'Spring Boot': faJava,
    'PHP': faPhp,
    'Laravel': faPhp,
    'C#': faWindows,
    'C++': faMicrochip,
    'Dart': faRocket,
    'SQL': faDatabase,
    'REST APIs': faGlobe,
    
    // Mobile
    'Flutter': faAppStore,
    'Ionic': faLightbulb,
    'Android': faAndroid,
    
    // Database
    'MySQL': faDatabase,
    'PostgreSQL': faDatabase,
    'MongoDB': faDatabase,
    'Redis': faDatabase,
    
    // Cloud & DevOps
    'AWS': faAws,
    'Docker': faDocker,
    'Kubernetes': faDocker,
    'CI/CD': faCogs,
    'Linux': faLinux,
    
    // Version Control
    'Git': faGit,
    'GitHub': faGithub,
    
    // Development Tools
    'VS Code': faFileCode,
    'Terminal': faTerminal,
    'Postman': faGlobe,
    'Webpack': faCogs,
    'Unity': faUnity,
    
    // Design Tools
    'Figma': faFigma,
    'Adobe Photoshop': faImage,
    'Adobe Illustrator': faPaintBrush,
    'Adobe Animate': faFilm,
    
    // Testing
    'Jest': faCode,
    'Cypress': faCode,
    'JUnit': faJava,
    'PyTest': faPython
  };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.sortSkills();
  }

  private sortSkills() {
    // Sort technical skills
    const technicalCategories = this.skills.technical;
    this.sortedTechnicalSkills = technicalCategories.map(category => ({
      ...category,
      sortedItems: category.items
        .map(item => ({
          name: item,
          proficiency: this.technicalSkillsProgress[item] || 75
        }))
        .sort((a, b) => b.proficiency - a.proficiency)
    }));

    // Sort soft skills categories to maintain consistent order
    this.sortedSoftSkills = [...this.softSkills].sort((a, b) => {
      const aMaxProficiency = Math.max(...a.items.map(item => item.proficiency));
      const bMaxProficiency = Math.max(...b.items.map(item => item.proficiency));
      return bMaxProficiency - aMaxProficiency;
    });
  }

  getCategoryIcon(category: string): IconDefinition {
    return this.categoryIcons[category] || faCode;
  }

  getSkillIcon(skill: string): IconDefinition {
    return this.skillIcons[skill] || faCode;
  }

  getSoftSkillCategoryIcon(category: string): IconDefinition {
    return this.softSkillCategoryIcons[category] || faBrain;
  }

  getSoftSkillIcon(skill: string): IconDefinition {
    return this.softSkillIcons[skill] || faBrain;
  }

  getSkillProgress(skill: string): string {
    return `${this.technicalSkillsProgress[skill] || 75}%`;
  }
} 