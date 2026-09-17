import { Component } from '@angular/core';
import { EDUCATION } from '../data/profile';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-education',
  imports: [RevealDirective],
  template: `
    <section id="education">
      <div class="wrap">
        <div class="section-head">
          <span class="cmd">git log --reverse</span>
          <h2>Education</h2>
        </div>
        <ol class="sheet" appReveal>
          @for (entry of education; track entry.degree) {
            <li class="row">
              <span class="period">{{ entry.period }}</span>
              <div>
                <h3>{{ entry.degree }}</h3>
                <p class="school">{{ entry.school }}</p>
                @if (entry.note) {
                  <p class="note">{{ entry.note }}</p>
                }
              </div>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .sheet {
      list-style: none;
      border-top: 1px solid var(--line);
    }
    .row {
      display: grid;
      grid-template-columns: 180px 1fr;
      gap: 24px;
      padding: 24px 0;
      border-bottom: 1px solid var(--line);
    }
    .period {
      font-family: var(--font-mono);
      font-size: 0.82rem;
      color: var(--muted);
      padding-top: 4px;
    }
    h3 {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1.15rem;
      letter-spacing: -0.01em;
    }
    .school {
      color: var(--muted);
      font-size: 0.92rem;
      margin-top: 2px;
    }
    .note {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      color: var(--muted);
      margin-top: 8px;
    }
    @media (max-width: 640px) {
      .row {
        grid-template-columns: 1fr;
        gap: 8px;
      }
    }
  `,
})
export class EducationComponent {
  readonly education = EDUCATION;
}
