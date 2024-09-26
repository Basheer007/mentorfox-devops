import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChangeDetectionStrategy, signal } from '@angular/core';
@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSectionComponent {
  readonly panelOpenState = signal(false);
}
