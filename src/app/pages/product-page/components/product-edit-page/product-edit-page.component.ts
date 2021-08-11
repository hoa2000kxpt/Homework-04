import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrls: ['./product-edit-page.component.css']
})
export class ProductEditPageComponent implements OnInit {

  constructor(private productService: ProductService
    , private router: ActivatedRoute, private _routing: Router) { }

  ngOnInit(): void {
  }

  insertProductForm = new FormGroup({
    name: new FormControl('', Validators.required),
    keyNo: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })

  get productForm() {
    return this.insertProductForm.controls;
  }

  onEditProduct() {
    this.productService.updateProduct(this.router.snapshot.params.id, this.insertProductForm.value).subscribe(
      res => {
        console.log(res, "Update data successfully!");
        this._routing.navigate(['/productManagement']);
      }
    )
  }

}
