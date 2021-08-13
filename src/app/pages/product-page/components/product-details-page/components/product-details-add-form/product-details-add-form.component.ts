import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-details-add-form',
  templateUrl: './product-details-add-form.component.html',
  styleUrls: ['./product-details-add-form.component.css']
})
export class ProductDetailsAddFormComponent implements OnInit {
  @Output() submitTransaction = new EventEmitter<any>()
  @Input() currentProductID: number=0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  insertTransactionForm = new FormGroup({
    transactionStatus: new FormControl(''),
    transactionQuantity: new FormControl('', Validators.required),
    transactionDate: new FormControl('', Validators.required),
  })

  get transactionForm() {
    return this.insertTransactionForm.controls;
  }

  onInsertTransaction() {
    const options = { Headers, responseType: 'json' as 'blob' };
    this.insertTransactionForm.value['productID'] = this.currentProductID;
    this.http.post('http://localhost:3000/transactions', this.insertTransactionForm.value, options).subscribe(
      data => {
        // console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

    this.submitTransaction.emit(this.insertTransactionForm.value);
  }

}
