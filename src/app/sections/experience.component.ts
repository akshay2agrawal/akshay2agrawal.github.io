import { Component } from '@angular/core';
import { EXPERIENCE_GROUPS } from '../data/profile';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  template: `
    <section id="experience">
      <div class="wrap">
        <div class="section-head">
          <span class="cmd">git log --graph</span>
          <h2>Experience</h2>
        </div>
        @for (group of groups; track group.org) {
          <article class="group" appReveal>
            <header class="group-head">
              <div>
                <h3>{{ group.org }}</h3>
                <p class="role">{{ group.role }}</p>
              </div>
              <span class="group-period">{{ group.period }}</span>
            </header>
            <ol class="graph">
              @for (exp of group.entries; track exp.branch) {
                <li class="entry" [style.--branch]="exp.color">
                  <div class="node" aria-hidden="true"></div>
                  <div class="card">
                    <div class="branch-line">
                      <span class="branch">{{ exp.branch }}</span>
                      @if (exp.current) {
                        <span class="head-tag">HEAD</span>
                      } @else {
                        <span class="merged-tag">merged</span>
                      }
                      @if (exp.period) {
                        <span class="period">{{ exp.period }}</span>
                      }
                    </div>
                    <h4>{{ exp.title }}</h4>
                    <p class="context">{{ exp.context }}</p>
                    <ul class="bullets">
                      @for (bullet of exp.bullets; track bullet) {
                        <li>{{ bullet }}</li>
                      }
                    </ul>
                    <ul class="stack">
                      @for (tech of exp.stack; track tech) {
                        <li>{{ tech }}</li>
                      }
                    </ul>
                  </div>
                </li>
              }
            </ol>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .group {
      margin-bottom: 72px;
    }
    .group:last-child {
      margin-bottom: 0;
    }
    .group-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px 24px;
      padding-bottom: 16px;
      margin-bottom: 32px;
      border-bottom: 2px solid var(--ink);
    }
    .group-head h3 {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: clamp(1.4rem, 2.8vw, 1.9rem);
      letter-spacing: -0.02em;
    }
    .role {
      font-family: var(--font-mono);
      font-size: 0.82rem;
      color: var(--muted);
      margin-top: 4px;
    }
    .group-period {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--muted);
    }
    .graph {
      list-style: none;
      position: relative;
      padding-left: 40px;
    }
    .graph::before {
      content: '';
      position: absolute;
      left: 11px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: var(--line);
    }
    .entry {
      position: relative;
      padding-bottom: 56px;
    }
    .entry:last-child {
      padding-bottom: 8px;
    }
    .node {
      position: absolute;
      left: -36px;
      top: 4px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--paper);
      border: 3px solid var(--branch);
    }
    .entry::before {
      content: '';
      position: absolute;
      left: -29px;
      top: 20px;
      bottom: -4px;
      width: 2px;
      background: var(--branch);
      opacity: 0.35;
    }
    .entry:last-child::before {
      display: none;
    }
    .branch-line {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      font-family: var(--font-mono);
      font-size: 0.82rem;
      margin-bottom: 12px;
    }
    .branch {
      color: var(--branch);
      font-weight: 500;
    }
    .head-tag {
      background: var(--signal);
      color: var(--paper-raised);
      font-size: 0.68rem;
      padding: 1px 8px;
      letter-spacing: 0.08em;
    }
    .merged-tag {
      border: 1px solid var(--line);
      color: var(--muted);
      font-size: 0.68rem;
      padding: 1px 8px;
      letter-spacing: 0.08em;
    }
    .period {
      color: var(--muted);
      margin-left: auto;
    }
    h4 {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: clamp(1.2rem, 2.2vw, 1.45rem);
      letter-spacing: -0.01em;
      line-height: 1.25;
    }
    .context {
      color: var(--muted);
      max-width: 640px;
      margin-top: 8px;
      font-size: 0.95rem;
    }
    .bullets {
      margin: 20px 0 0;
      padding: 0;
      list-style: none;
      max-width: 720px;
    }
    .bullets li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 10px;
      font-size: 0.95rem;
    }
    .bullets li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 10px;
      height: 2px;
      background: var(--branch);
    }
    .stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      list-style: none;
      margin-top: 20px;
    }
    .stack li {
      font-family: var(--font-mono);
      font-size: 0.74rem;
      border: 1px solid var(--line);
      background: var(--paper-raised);
      padding: 3px 10px;
      color: var(--muted);
    }
    @media (max-width: 640px) {
      .period {
        margin-left: 0;
        width: 100%;
      }
    }
  `,
})
export class ExperienceComponent {
  readonly groups = EXPERIENCE_GROUPS;
}
