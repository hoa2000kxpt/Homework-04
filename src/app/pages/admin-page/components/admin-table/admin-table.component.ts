import { Component, Input, OnInit } from '@angular/core';
import * as $ from "jquery";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {

  @Input() users = [
    {
      "id": 1,
      "username": "Hoa Do",
      "email": "hoa2000kx@gmail.com",
      "fullname": "Do Van Hoa",
      "phoneNumber": "0123456789"
    },
    {
      "id": 2,
      "username": "Long Vu",
      "email": "vu2000hn@gmail.com",
      "fullname": "Nguyen Long Vu",
      "phoneNumber": "0987654321"
    },
    {
      "id": 3,
      "username": "Hoang Hieu",
      "email": "hieu4c18@gmail.com",
      "fullname": "Hoang Trung Hieu",
      "phoneNumber": "0111222333"
    },
    {
      "id": 4,
      "username": "Trung Thanh",
      "email": "trungthanh7c18@gmail.com",
      "fullname": "Nguyen Trung Thanh",
      "phoneNumber": "0444555666"
    },
    {
      "id": 5,
      "username": "Duc Tung",
      "email": "ductung1999@gmail.com",
      "fullname": "Pham Duc Tung",
      "phoneNumber": "0777888999"
    }
  ];

  dtOptions: DataTables.Settings = {};
 

  constructor(private pipeInstance: UpperCasePipe ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      // pageLength: 2
    };
  }

  viewUser(pos: any) {

    alert("ID: " + this.users[pos].id + "\n" + "Username: "
      + this.users[pos].username + "\n" + "Email: " 
      + this.users[pos].email + "\n" + "Full Name: " + this.users[pos].fullname 
      + "\n" + "Phone Number: " + this.users[pos].phoneNumber);


    // console.log(this.users);
  }

}
