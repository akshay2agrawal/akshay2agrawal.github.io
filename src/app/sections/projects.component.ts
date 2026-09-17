import { Component } from '@angular/core';
import { PROFILE, REPOS } from '../data/profile';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  template: `
    <section id="projects">
      <div class="wrap">
        <div class="section-head">
          <span class="cmd">ls ~/github</span>
          <h2>Projects</h2>
        </div>
        <div class="grid" appReveal>
          @for (repo of repos; track repo.name) {
            @if (repo.url) {
              <a class="card" [href]="repo.url" target="_blank" rel="noopener">
                <span class="name">{{ repo.name }}</span>
                <p class="desc">{{ repo.description }}</p>
                <span class="lang">
                  <span class="dot" [style.background]="repo.languageColor" aria-hidden="true"></span>
                  {{ repo.language }}
                </span>
              </a>
            } @else {
              <article class="card">
                <span class="name">{{ repo.name }}</span>
                <p class="desc">{{ repo.description }}</p>
                <span class="lang">
                  <span class="dot" [style.background]="repo.languageColor" aria-hidden="true"></span>
                  {{ repo.language }}
                </span>
              </article>
            }
          }
        </div>
        <a class="all" [href]="githubUrl + '?tab=repositories'" target="_blank" rel="noopener">
          View all repositories on GitHub →
        </a>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: 1px;
      background: var(--line);
      border: 1px solid var(--line);
    }
    .card {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: var(--paper-raised);
      padding: 24px;
      text-decoration: none;
      transition: background 0.2s ease;
    }
    .card:hover {
      background: var(--paper);
    }
    .card:hover .name {
      color: var(--signal);
    }
    .name {
      font-family: var(--font-mono);
      font-weight: 500;
      font-size: 0.95rem;
      transition: color 0.2s ease;
    }
    .desc {
      font-size: 0.9rem;
      color: var(--muted);
      flex-grow: 1;
    }
    .lang {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--muted);
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .all {
      display: inline-block;
      margin-top: 28px;
      font-family: var(--font-mono);
      font-size: 0.9rem;
      text-decoration: none;
      border-bottom: 1px solid var(--line);
      padding-bottom: 2px;
      transition: border-color 0.2s ease, color 0.2s ease;
    }
    .all:hover {
      color: var(--signal);
      border-color: var(--signal);
    }
  `,
})
export class ProjectsComponent {
  readonly repos = REPOS;
  readonly githubUrl = PROFILE.github;
}
