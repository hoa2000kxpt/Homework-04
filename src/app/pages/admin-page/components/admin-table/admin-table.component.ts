import { Component, Input, OnInit } from '@angular/core';
import * as $ from "jquery";
import Swal from 'sweetalert2';
import { Pipe } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { RsService } from './rs.service';
import { Router } from '@angular/router';
// import 'datatables.net';
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

  constructor(private rs: RsService, private router: Router) { }
  
  ngOnInit() {
    $.noConflict();
    this.dtOptions = {
      pagingType: 'full_numbers',

      // pageLength: 2
    };
    $('#dataTable').DataTable();
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

  onDelete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.rs.deleteUser(id).subscribe(res => {
        
        });
      }
    })
      
  }

  
  editButtonClick(id: number) {
    this.router.navigate(['/edit', id])
  }

}
