import { Component } from '@angular/core';
import { PROFILE } from '../data/profile';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact">
      <div class="wrap">
        <div class="section-head">
          <span class="cmd">git remote -v</span>
          <h2>Contact</h2>
        </div>
        <p class="pitch">
          Open to conversations about full-stack engineering, backend architecture, and building AI
          agents that ship.
        </p>
        <div class="links">
          <a [href]="'mailto:' + profile.email">{{ profile.email }}</a>
          <a [href]="profile.github" target="_blank" rel="noopener">github.com/akshay2agrawal</a>
          <a [href]="profile.linkedin" target="_blank" rel="noopener">linkedin.com/in/akshay2agrawal</a>
          <a [href]="profile.cv" download="Akshay_Agrawal_CV.pdf">Download CV (PDF) ↓</a>
        </div>
      </div>
      <footer>
        <div class="wrap foot">
          <span>© 2026 {{ profile.name }}</span>
          <span>Built with Angular</span>
        </div>
      </footer>
    </section>
  `,
  styles: `
    .pitch {
      max-width: 540px;
      font-size: 1.1rem;
      color: var(--muted);
    }
    .links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;
      margin: 36px 0 96px;
    }
    .links a {
      font-family: var(--font-mono);
      font-size: clamp(1rem, 2.6vw, 1.4rem);
      text-decoration: none;
      border-bottom: 1px solid var(--line);
      padding-bottom: 3px;
      transition: border-color 0.2s ease, color 0.2s ease;
    }
    .links a:hover {
      color: var(--signal);
      border-color: var(--signal);
    }
    footer {
      border-top: 1px solid var(--line);
      padding: 24px 0;
    }
    .foot {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--muted);
    }
  `,
})
export class ContactComponent {
  readonly profile = PROFILE;
}
