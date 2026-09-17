import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../data/profile';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  template: `
    <section id="skills">
      <div class="wrap">
        <div class="section-head">
          <span class="cmd">cat stack.txt</span>
          <h2>Skills</h2>
        </div>
        <dl class="sheet" appReveal>
          @for (group of groups; track group.label) {
            <div class="row">
              <dt>{{ group.label }}</dt>
              <dd>
                <ul>
                  @for (skill of group.skills; track skill) {
                    <li>{{ skill }}</li>
                  }
                </ul>
              </dd>
            </div>
          }
        </dl>
      </div>
    </section>
  `,
  styles: `
    .sheet {
      border-top: 1px solid var(--line);
    }
    .row {
      display: grid;
      grid-template-columns: 180px 1fr;
      gap: 24px;
      padding: 24px 0;
      border-bottom: 1px solid var(--line);
    }
    dt {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      padding-top: 6px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      list-style: none;
    }
    li {
      font-size: 0.92rem;
      font-weight: 500;
      border: 1px solid var(--line);
      background: var(--paper-raised);
      padding: 5px 14px;
    }
    @media (max-width: 640px) {
      .row {
        grid-template-columns: 1fr;
        gap: 12px;
      }
    }
  `,
})
export class SkillsComponent {
  readonly groups = SKILL_GROUPS;
}
