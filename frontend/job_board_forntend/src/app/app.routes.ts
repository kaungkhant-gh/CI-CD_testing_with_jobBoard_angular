import { Routes } from '@angular/router';
import { notAuthGuard } from './core/guard/not-auth-guard';
import { authGuard } from './core/guard/auth-guard';
import { Not_foundComponent } from './shared/not_found/not_found.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
    canActivate: [notAuthGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
    canActivate: [notAuthGuard],
  },
  {
    path: 'joblist',
    loadComponent: () =>
      import('./features/jobHomePage/job_list/job_list.component').then(
        (m) => m.Job_listComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'jobs/add',
    loadComponent: () =>
      import('./features/jobHomePage/job_add/job_add.component').then(
        (m) => m.JobAddComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'jobs/:id',
    loadComponent: () =>
      import('./features/jobHomePage/job_detail/job_detail.component').then(
        (m) => m.Job_detailComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'jobs/:id/edit',
    loadComponent: () =>
      import('./features/jobHomePage/job_edit/job_edit.component').then(
        (m) => m.Job_editComponent
      ),
    canActivate: [authGuard],
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Not_foundComponent,
  },
];
