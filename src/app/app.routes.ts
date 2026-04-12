import { Routes } from '@angular/router';
import { Home } from './pages/home/home';


export const routes: Routes = [
  {
    path: '',
     component: Home
  },
//   {
//     path: 'projects',
//     component: ProjectsComponent
//   },
//   {
//     path: 'contact',
//     // component: ContactComponent
//   },
  {
    path: '**',
    redirectTo: ''
  }
];