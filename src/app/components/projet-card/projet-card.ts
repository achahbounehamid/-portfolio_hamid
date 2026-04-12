import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projet-card',
   standalone: true,
  imports: [NgClass],
  templateUrl: './projet-card.html',
  styleUrl: './projet-card.scss',
})
export class ProjetCard {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() description!: string;
  @Input() link?: string;

  @Input() tags: { label: string; type?: string }[] = [];

}
