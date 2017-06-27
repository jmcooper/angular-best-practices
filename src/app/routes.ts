import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog';
import { RegisterComponent } from './components/sign-in';
import { SignInComponent } from './components/sign-in';

export const appRoutes : Routes = [
  { path: 'catalog', component: CatalogComponent, },
  { path: 'users/register', component: RegisterComponent, },
  { path: 'users/sign-in', component: SignInComponent, },
];
