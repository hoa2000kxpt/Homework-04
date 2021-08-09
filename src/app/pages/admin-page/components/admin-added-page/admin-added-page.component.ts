import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-admin-added-page',
  templateUrl: './admin-added-page.component.html',
  styleUrls: ['./admin-added-page.component.css']
})
export class AdminAddedPageComponent implements OnInit {
  // email = "";
  // id = "";
  // username = "";
  // fullname = "";
  // phoneNumber = "";
  @Output() submitUser = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  insertUserForm = new FormGroup({
    // id: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    gender: new FormControl('')
  })

  // get id() {
  //   return this.insertUserForm.get('id');
  // }

  get username() {
    return this.insertUserForm.get('username');
  }

  get email() {
    return this.insertUserForm.get('email');
  }

  get fullname() {
    return this.insertUserForm.get('fullname');
  }

  get phoneNumber() {
    return this.insertUserForm.get('phoneNumber');
  }

  get gender() {
    return this.insertUserForm.get('gender');
  }

  onSubmit() {
    console.log(this.insertUserForm.value);
    const options = { Headers, responseType: 'json' as 'blob' };
    this.http.post('http://localhost:3000/users', this.insertUserForm.value, options).subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    
    this.submitUser.emit(this.insertUserForm.value)
  }



}
