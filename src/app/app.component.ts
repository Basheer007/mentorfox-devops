import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { GuarenteeSectionComponent } from './guarentee-section/guarentee-section.component';
import { PerfectForSectionComponent } from './perfect-for-section/perfect-for-section.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutComponent,
    BenefitsComponent,
    GuarenteeSectionComponent,
    PerfectForSectionComponent,
    FaqSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
