import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { DataRepositoryService } from '../services/data-repository'

@Component({
  styles: [`
    form {
      color: #336699;
      font-size:18px;
      padding:30px;
      width: 298px;
      margin: 0 auto;
    }
    input {
      display: block;
      font-size:18px;
      padding-left:10px;
      width: 275px;
    }
    button {
      font-size: 24px;
      color: #556b8e;
    }
    button:disabled {
      color: #999999;
    }
    .header {
      color: #336699;
      text-align:center;
      padding-top:20px;
      margin-top:0;
    }
    .form-group {
      margin: 10px;
    }
    .buttons {
      text-align: right;
      margin-right: 0px;
    }
    .save {
      background-color: #CCDDFF;
      border-color: #CCDDFF;
    }
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :ms-input-placeholder  { color: #999; }
  `],
  template: `
    <div>
      <h2 class="header">Sign In</h2>
      <form #signInForm="ngForm" (ngSubmit)="signIn(signInForm.value)" autocomplete="off" novalidate>
        <div class="form-group" [ngClass]="{ 'error' : signInForm.controls.email?.invalid && signInForm.controls.email?.dirty }">
          <label for="email">Email:</label>
          <em *ngIf="signInForm.controls.email?.invalid && signInForm.controls.email?.dirty">Required</em>
          <input [(ngModel)]="credentials.email" required name="email" id="email" type="text" placeholder="Email..." />
        </div>
        <div class="form-group" [ngClass]="{ 'error' : signInForm.controls.password?.invalid && signInForm.controls.password?.dirty }">
          <label for="password">Password:</label>
          <em *ngIf="signInForm.controls.password?.invalid && signInForm.controls.password?.dirty">Required</em>
          <input [(ngModel)]="credentials.password" required name="password" id="password" type="password" placeholder="Password..." />
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
  credentials:any = {};

  constructor(private router:Router, private dataRepository:DataRepositoryService) { }

  signIn(credentials:any) {
    this.dataRepository.signIn(credentials)
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
  saving:boolean=false;

  constructor(private router:Router, private dataRepository:DataRepositoryService) { }

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
    });
  }

  registerUser(user) {
    this.saving=true;
    this.dataRepository.saveUser(user)
      .subscribe(
        null,
        ()=>this.saving=false,
        () => this.router.navigate(['/catalog']));
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
