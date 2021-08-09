import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {

      $('.list-group-item').click(function () {
        if ($(this).is("active"))
          $('.list-group-item').not(this).removeClass('active');
        else
          $(this).addClass('active');
        $('.list-group-item').not(this).removeClass('active');
      });
    });

  }
}
