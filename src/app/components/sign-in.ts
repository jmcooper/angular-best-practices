import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { UserRepositoryService } from '../services/user-repository'

@Component({
  styleUrls: ['../styles/sign-in.css'],
  template: `
    <div>
      <h2 class="header">Sign In</h2>
      <form #signInForm="ngForm" (ngSubmit)="signIn(signInForm.value)" autocomplete="off" novalidate>
        <div class="form-group" [ngClass]="{ 'error' : signInForm.controls.email?.invalid && signInForm.controls.email?.dirty }">
          <label for="email">Email:</label>
          <em *ngIf="signInForm.controls.email?.invalid && signInForm.controls.email?.dirty">Required</em>
          <input [(ngModel)]="signIn.email" required name="email" id="email" type="text" placeholder="Email..." />
        </div>
        <div class="form-group" [ngClass]="{ 'error' : signInForm.controls.password?.invalid && signInForm.controls.password?.dirty }">
          <label for="password">Password:</label>
          <em *ngIf="signInForm.controls.password?.invalid && signInForm.controls.password?.dirty">Required</em>
          <input [(ngModel)]="signIn.password" required name="password" id="password" type="password" placeholder="Password..." />
        </div>
        <div class="form-group buttons" >
          <button type="button" (click)="cancel()">Cancel</button>
          <button class="save" type="submit" [disabled]="signInForm.invalid">Sign In</button>
        </div>
      </form>
    </div>
  `
})
export class SignInComponent {
  constructor(private router:Router, private userRepository:UserRepositoryService) { }

  signIn(credentials) {
    this.userRepository.signIn(credentials)
      .subscribe(
        null,
        (err) => {console.error(err, 'Error')},
        () => this.router.navigate(['/catalog'])
      )
  }

  cancel() {
    this.router.navigate(['/'])
  }
}

@Component({
  styleUrls: ['../styles/register.css'],
  templateUrl: '../templates/register.html'
})
export class RegisterComponent {
  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;

  constructor(private router:Router, private userRepository:UserRepositoryService) { }

  ngOnInit() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    })
  }

  registerUser(user) {
    this.userRepository.save(user).subscribe(null, null, () => this.router.navigate(['/catalog']))
  }

  cancel() {
    this.router.navigate(['/'])
  }
}
