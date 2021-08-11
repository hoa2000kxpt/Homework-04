import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.css']
})
export class AdminEditPageComponent implements OnInit {
  openedEditUser = false;
  @Output() submitUser = new EventEmitter<any>();

  constructor(private http: HttpClient, private userService: UserService, private router: ActivatedRoute, private _routing: Router) { }

  ngOnInit(): void {
    this.userService.getCurrentUser(this.router.snapshot.params.id).subscribe(
      res => {
        this.insertUserForm = new FormGroup({
          username: new FormControl(res['username']),
          email: new FormControl(res['email']),
          fullname: new FormControl(res['fullname']),
          phoneNumber: new FormControl(res['phoneNumber']),
          gender: new FormControl(res['gender']),
          password: new FormControl(res['password']),
          role: new FormControl(res['role']),
          status: new FormControl(res['status']),
          dob: new FormControl(res['dob'])
        })
      }
    )
  }

  insertUserForm: any = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    fullname: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    gender: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
    status: new FormControl(''),
    dob: new FormControl('')
  })


  get userSubmit() {
    return this.insertUserForm.controls;
  }


 

  editSubmit() {
    this.userService.updateUser(this.router.snapshot.params.id, this.insertUserForm.value).subscribe(
      res => {
        console.log(res, "Update data successfully!");
        this._routing.navigate(['/adminPage']);
      }
    )
  }
}
