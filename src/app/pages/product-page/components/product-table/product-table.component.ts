import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import Swal from 'sweetalert2';
import { RestService } from './rest.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  columns = ["Product ID", "Product Name", "Product Image", "Number of keys", "Descrption" ,"Price", "Functions"];

  // index = ["id", "desc", "price"]

  @Input() products: Products[] = [];

  constructor(private rs: RestService) { }

  ngOnInit(): void {
    this.rs.getProducts().subscribe(
      res => {
        this.products = res;
        // console.log(res);
      },
      err => {
        console.log("Errors occured!" + err);
      }
    )
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
        this.rs.deleteProduct(id).subscribe(res => {
        
        });
      }
    })
      
  }

  

}
