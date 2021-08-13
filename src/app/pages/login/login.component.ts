
import { Component, Input, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service'
import { SignInData} from 'src/app/model/signInData'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @Input() title: string="";
  areCredentialsInvalid = false;

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private titleService:Title
    ) 
    { 
      this.titleService.setTitle("Login Page");
    }

  ngOnInit(): void {
  }

  signInForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  get email() { return this.signInForm.get('email'); }

  get password() { return this.signInForm.get('password')}

  onLoginClick() {
    // this.router.navigate(['./admin']);
    const signInData = new SignInData(this.signInForm.value.email, this.signInForm.value.password);
    if (!this.authenticationService.authenticate(signInData)) {
      this.areCredentialsInvalid = true;
    }
  }

}
