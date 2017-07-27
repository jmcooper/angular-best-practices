import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses';
import { RegisterComponent } from './components/sign-in';
import { SignInComponent } from './components/sign-in';

export const appRoutes : Routes = [
  { path: 'catalog', component: CoursesComponent, },
  { path: 'users/register', component: RegisterComponent, },
  { path: 'users/sign-in', component: SignInComponent, },
];
