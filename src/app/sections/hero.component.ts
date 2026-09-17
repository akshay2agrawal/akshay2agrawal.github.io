import { Component } from '@angular/core';
import { PROFILE } from '../data/profile';

@Component({
  selector: 'app-hero',
  template: `
    <section class="hero wrap" id="top">
      <p class="cmd load-1">
        <span class="prompt">$</span> git log --author="{{ profile.name }}" --all
      </p>
      <h1>
        <span class="first load-2">Akshay</span>
        <span class="last load-3">Agrawal</span>
      </h1>
      <p class="tagline load-4">{{ profile.tagline }}</p>
      <div class="meta load-4">
        <a [href]="profile.github" target="_blank" rel="noopener">GitHub ↗</a>
        <a [href]="profile.linkedin" target="_blank" rel="noopener">LinkedIn ↗</a>
        <a class="cv" [href]="profile.cv" download="Akshay_Agrawal_CV.pdf">Download CV ↓</a>
        <span class="loc">{{ profile.location }}</span>
      </div>
      <dl class="stats load-5">
        @for (stat of profile.stats; track stat.label) {
          <div class="stat">
            <dt>{{ stat.label }}</dt>
            <dd>{{ stat.value }}</dd>
          </div>
        }
      </dl>
    </section>
  `,
  styles: `
    .hero {
      padding-top: 128px;
      padding-bottom: 72px;
    }
    .cmd {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--muted);
      margin-bottom: 20px;
    }
    .prompt {
      color: var(--signal);
    }
    h1 {
      font-family: var(--font-display);
      font-weight: 900;
      font-size: clamp(3.2rem, 11vw, 8rem);
      line-height: 0.95;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
    }
    .last {
      color: transparent;
      -webkit-text-stroke: 2px var(--ink);
    }
    .tagline {
      max-width: 560px;
      margin-top: 32px;
      font-size: 1.15rem;
      color: var(--muted);
    }
    .meta {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-top: 24px;
      font-family: var(--font-mono);
      font-size: 0.9rem;
    }
    .meta a {
      text-decoration: none;
      border-bottom: 1px solid var(--line);
      padding-bottom: 2px;
      transition: border-color 0.2s ease, color 0.2s ease;
    }
    .meta a:hover {
      color: var(--signal);
      border-color: var(--signal);
    }
    .cv {
      color: var(--signal);
      border-color: var(--signal);
    }
    .loc {
      color: var(--muted);
    }
    .loc::before {
      content: '· ';
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1px;
      background: var(--line);
      border: 1px solid var(--line);
      margin-top: 64px;
    }
    .stat {
      background: var(--paper-raised);
      padding: 20px;
    }
    .stat dd {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 2rem;
      letter-spacing: -0.02em;
    }
    .stat dt {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--muted);
    }
    @media (prefers-reduced-motion: no-preference) {
      .load-1, .load-2, .load-3, .load-4, .load-5 {
        opacity: 0;
        transform: translateY(16px);
        animation: rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
      }
      .load-2 { animation-delay: 0.1s; }
      .load-3 { animation-delay: 0.2s; }
      .load-4 { animation-delay: 0.35s; }
      .load-5 { animation-delay: 0.5s; }
      @keyframes rise {
        to {
          opacity: 1;
          transform: none;
        }
      }
    }
  `,
})
export class HeroComponent {
  readonly profile = PROFILE;
}
