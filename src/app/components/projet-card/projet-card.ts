import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projet-card',
  imports: [CommonModule],
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
