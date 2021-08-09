import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { RestService } from './rest.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  columns = ["Product ID", "Product Name", "Number of keys", "Price", "Functions"];

  // index = ["id", "desc", "price"]

  products: Products[] = [];

  constructor(private rs: RestService) { }

  ngOnInit(): void {
    this.rs.getProducts().subscribe(
      res => {
        this.products = res;
        console.log(res);
      },
      err => {
        console.log("Errors occured!" + err);
      }
    )
  }

  

}
