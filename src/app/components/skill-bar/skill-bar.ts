import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  imports: [],
  templateUrl: './skill-bar.html',
  styleUrl: './skill-bar.scss',
})
export class SkillBar {
   @Input() name!: string;
  @Input() value!: number;

}
