import { Component, Input } from '@angular/core';
import { Skill } from '../../core/models/skill.model';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  templateUrl: './skill-bar.html',
  styleUrls: ['./skill-bar.scss']
})
export class SkillBarComponent {
  @Input() skill!: Skill;
}