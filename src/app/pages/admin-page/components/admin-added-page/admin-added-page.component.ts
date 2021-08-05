import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {  FormControl, FormGroup, Validators} from '@angular/forms'


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

  constructor() { }

  ngOnInit(): void {
  }

  insertUserForm = new FormGroup({
    id: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required)
  })

  get id() {
    return this.insertUserForm.get('id');
  }

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

  onSubmit() {
    console.log(this.insertUserForm.value);
    // console.log(this.insertUserForm.controls['username'].value);
    // console.log(this.insertUserForm.get('username').value);
    // this.users.push(this.insertUserForm.value);
    this.submitUser.emit(this.insertUserForm.value)
  }



}
