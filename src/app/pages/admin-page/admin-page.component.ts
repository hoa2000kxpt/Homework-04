import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  opened = false;
  openedInsertUser = false;
  userList: Array<any> = [{
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
  }];

  constructor() { }

  ngOnInit(): void {
  }

  addUser(user: any) {
    this.userList.push(JSON.parse(JSON.stringify(user)));
  }


}
