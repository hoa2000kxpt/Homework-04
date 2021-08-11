import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { uniqueEmailValidator} from 'src/app/directives/unique-email-validator.directive';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-admin-added-page',
  templateUrl: './admin-added-page.component.html',
  styleUrls: ['./admin-added-page.component.css']
})
export class AdminAddedPageComponent implements OnInit {

  @Output() submitUser = new EventEmitter<any>();

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {

  }

  insertUserForm = new FormGroup({
    // id: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),

    fullname: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    dob: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  })

  // get id() {
  //   return this.insertUserForm.get('id');
  // }

  get userSubmit() {
    return this.insertUserForm.controls;
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
