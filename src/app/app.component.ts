import { Component, signal } from '@angular/core';
import { HeroComponent } from './sections/hero.component';
import { ExperienceComponent } from './sections/experience.component';
import { ProjectsComponent } from './sections/projects.component';
import { SkillsComponent } from './sections/skills.component';
import { EducationComponent } from './sections/education.component';
import { ContactComponent } from './sections/contact.component';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, EducationComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly theme = signal<Theme>(this.initialTheme());

  toggleTheme(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // private mode: theme still applies for this visit
    }
  }

  private initialTheme(): Theme {
    const saved = document.documentElement.getAttribute('data-theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
