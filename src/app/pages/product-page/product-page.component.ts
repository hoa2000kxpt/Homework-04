import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  opened = false;
  openedInsertProduct = false;
  productList: Array<any> = [];
  title: string = "Product Page";

  constructor(private http: HttpClient, private titleService:Title) {
    this.titleService.setTitle("Product Page");
   }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/products').subscribe(
      (res: any) => {
        console.log(res);
        this.productList = res;
      }
    );
  }

  addProduct(product: any) {
    this.productList.push(JSON.parse(JSON.stringify(product)));
  }

}
