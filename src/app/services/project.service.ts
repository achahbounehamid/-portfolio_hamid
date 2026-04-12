import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

@Injectable({ providedIn: 'root' })
export class ProjectService {

  constructor(private http: HttpClient) {}

private readonly baseUrl = '/assets/data';

getProjects() {
  return this.http.get<any[]>(`${this.baseUrl}/projects.json`);
}
}