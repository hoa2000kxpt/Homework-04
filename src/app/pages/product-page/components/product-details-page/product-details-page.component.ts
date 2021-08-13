import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/model/products';
import { Transaction } from 'src/app/model/transactions';
import { ProductService } from 'src/app/services/product.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {
  title: string = "Product Page";
  productObject: Products[] = [];
  productDetails!: any;
  openedInsertTransaction = false;
  transactionDetails: Array<any> = [];
  currentProductID: number=0;

  constructor(private productService: ProductService,
    private router: ActivatedRoute,
    private titleService:Title
  ) {
    this.titleService.setTitle("Product Details");
   }

  ngOnInit(): void {
    this.currentProductID = this.router.snapshot.params.id;
    this.productService.getCurrentProduct(this.router.snapshot.params.id).subscribe(
      res => {
        this.productObject = res;
        this.productDetails = Object(this.productObject);
        console.log(this.productDetails.name);
        // this.productDetails = JSON.parse(JSON.stringify(this.productObject));
        // console.log(this.productDetails)
      }
    )
  }

  addTransaction(transaction: any) {
    this.transactionDetails.push(JSON.parse(JSON.stringify(transaction)));
    // console.log(this.transactionDetails.values);
  }

}
