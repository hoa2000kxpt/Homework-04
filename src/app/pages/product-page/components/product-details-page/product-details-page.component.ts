import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/model/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {
  title: string = "Product Page";
  productObject: Products[] = [];
  productDetails!: any;

  constructor(private productService: ProductService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productService.getCurrentProduct(this.router.snapshot.params.id).subscribe(
      res => {
        this.productObject = res;
        this.productDetails = Object(this.productObject);
        console.log(this.productDetails);
        // this.productDetails = JSON.parse(JSON.stringify(this.productObject));
        // console.log(this.productDetails)
      }
    )
  }

}
