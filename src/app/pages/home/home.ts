import { Component, inject } from '@angular/core';
import { IdeWindow } from '../../components/ide-window/ide-window';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
   private projectService = inject(ProjectService);

  projects$ = this.projectService.getProjects();
}
