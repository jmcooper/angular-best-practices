import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { appRoutes } from './routes'
import { AppComponent }  from './components/app';
import { NavBarComponent }  from './components/nav-bar';
import { CoursesComponent } from "./components/courses";
import { RegisterComponent } from "./components/sign-in";
import { SignInComponent } from "./components/sign-in";
import { CatalogRepositoryService } from "./services/catalog-repository"
import { UserRepositoryService } from './services/user-repository'

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    CoursesComponent,
    RegisterComponent,
    SignInComponent
  ],
  providers: [ CatalogRepositoryService, UserRepositoryService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
