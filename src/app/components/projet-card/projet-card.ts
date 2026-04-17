import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/models/project.model';


@Component({
  selector: 'app-projet-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projet-card.html',
  styleUrls: ['./projet-card.scss']
})
export class ProjetCardComponent {

  @Input() project!: Project; 

}
