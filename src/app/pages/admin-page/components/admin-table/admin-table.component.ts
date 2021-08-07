import { Component, Input, OnInit } from '@angular/core';
import * as $ from "jquery";
import { UpperCasePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { Pipe } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})


export class AdminTableComponent implements OnInit {
  @Input() users: any = [];
  dtOptions: DataTables.Settings = {};
  openedEditUser = false;

  constructor(private pipeInstance: UpperCasePipe) { }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',

      // pageLength: 2
    };
    $('#myTable').DataTable();
  }

  transform(value: any) {
    return value.substr(0, 10);
  }  

  viewUser(pos: any) {

    Swal.fire("ID: " + this.users[pos].id + "\n" + "Username: "
      + this.users[pos].username + "\n" + "Email: "
      + this.users[pos].email + "\n" + "Full Name: " + this.users[pos].fullname
      + "\n" + "Phone Number: " + this.users[pos].phoneNumber);
  }



}
