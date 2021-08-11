import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add-page',
  templateUrl: './product-add-page.component.html',
  styleUrls: ['./product-add-page.component.css']
})
export class ProductAddPageComponent implements OnInit {
  @Output() submitProduct = new EventEmitter<any>();
  // selectedFile = null;

  constructor(private http: HttpClient) { }

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

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0]
  // }

  // afuConfig = {
  //   uploadAPI: {
  //     url: "http://localhost:3000/products",
  //     multiple: false,
  //     formatsAllowed: ".jpg,.png",
  //     maxSize: "1",
  //   },
  // };

  onInsertProduct() {

    const options = { Headers, responseType: 'json' as 'blob' };
    this.http.post('http://localhost:3000/products', this.insertProductForm.value, options).subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );


    this.submitProduct.emit(this.insertProductForm.value)
  }

}
