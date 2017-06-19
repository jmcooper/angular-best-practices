import { Component } from '@angular/core';

import { UserRepositoryService } from "../services/user-repository";

@Component({
  selector: 'nav-bar',
  styleUrls: [`../styles/nav-bar.css`],
  template: `
    <div class="nav-bar">
      <img class="logo" src="/assets/images/whitebeard-logo.png" alt="Whitebeard Logo" />
      <div class="nav-item"><a [routerLink]="['/catalog']">Catalog</a></div>
      <div class="nav-item" *ngIf="user"><a href="#">Schedule</a></div>
      <div class="account">
        <span class="welcome" *ngIf="userRepository.currentUser">
          <a (click)="showMenu=!showMenu">
            Welcome {{userRepository.currentUser?.firstName}}
            <span class="chevron">&#8964;</span>
          </a>
          <div class="menu" *ngIf="showMenu" (click)="signOut()">Sign Out</div>
        </span>
        <span *ngIf="!userRepository.currentUser"><a [routerLink]="['/users/sign-in']">Sign In</a></span>
        <span *ngIf="!userRepository.currentUser"><a [routerLink]="['/users/register']">Register</a></span>
      </div>
    </div>
`
})
export class NavBarComponent  {
  showMenu:boolean;

  constructor(private userRepository:UserRepositoryService) {}

  signOut() {

  }
}
