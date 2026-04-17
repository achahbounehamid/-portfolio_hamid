import { Routes } from '@angular/router';
import { ProjectsComponent  } from './feature/projects/projects';
import { Contact } from './feature/contact/contact';
import { Layout } from './layout/layout/layout';
import { HomeComponent } from './feature/home/home';
import { CvComponent } from './feature/cv/cv.component';


export const routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent  },
      { path: 'contact', component: Contact },
      { path: 'cv', component: CvComponent },
    ],
    imports: [RouterOutlet, Header, Footer],
  },
];
