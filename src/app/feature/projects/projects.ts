import { Component } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { ProjectService } from '../../services/project.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
   standalone: true,
  imports: [
    CommonModule,
    AsyncPipe
  ],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {

  projects$!: Observable<Project[]>; 

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects$ = this.projectService.getProjects(); 
  }

}