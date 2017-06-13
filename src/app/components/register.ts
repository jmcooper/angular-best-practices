import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { UserRepositoryService } from '../services/user-repository'

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
    this.userRepository.save(user).subscribe(() => this.router.navigate(['/catalog']))
  }

  cancel() {
    this.router.navigate(['/'])
  }
}