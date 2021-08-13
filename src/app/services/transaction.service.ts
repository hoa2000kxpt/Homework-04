import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url: string = "http://localhost:3000/transactions"

  constructor(private http: HttpClient) { }

  getAllTransactions(id: any): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url + '?productID=' + id);
  }
}
