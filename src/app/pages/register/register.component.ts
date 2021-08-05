import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  submitRegister(): void {
    // this.http.post('http://localhost:4200/api/register', this.formRegister.getRawValue())
    // .subscribe(res =>{
    //   console.log(res);
    //   // this.router.navigate(['/login']);
    // })
    
  }

}
