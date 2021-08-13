import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { faBluetooth } from '@fortawesome/free-brands-svg-icons';
import { Chart, registerables } from 'chart.js';
import { Transaction } from 'src/app/model/transactions';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-product-details-chart',
  templateUrl: './product-details-chart.component.html',
  styleUrls: ['./product-details-chart.component.css']
})
export class ProductDetailsChartComponent implements OnInit, AfterViewInit {
  @Input() transactions: Transaction[] = [];
  @Input() currentProductID: number=0;
  sellNumsArr: number[] = Array();
  buyNumsArr: number[] = Array();
  dateArr: string[] = Array();
  // transactionList: Array<any> = [] 
  


  constructor(private transactionService: TransactionService) {
    Chart.register(...registerables);

    
  }

  ngAfterViewInit() {
    
    
    // console.log(Array(this.sellNumsArr)[0]);
    // console.log(typeof Array(this.buyNumsArr));
  }


  ngOnInit(): void {
    this.transactionService.getAllTransactions(this.currentProductID).subscribe(
      res => {
        event?.preventDefault();
        this.transactions = res;
        console.log(this.transactions);
        for (let i = 0; i < this.transactions.length; i++) {
          this.dateArr.push(this.transactions[i].transactionDate);
          if (this.transactions[i].transactionStatus === "sell") {
            this.sellNumsArr.push(this.transactions[i].transactionQuantity)
    
    
          } else {
            this.buyNumsArr.push(this.transactions[i].transactionQuantity)
          }
        }


        var lineChart = new Chart('line-chart', {
          type: 'line',
          options: {
            responsive: true,
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: "Transaction Date",
                  color: "#000",
                  font: {
                    size: 18,
                    weight: 'bold',
                    lineHeight: 1.2
                  }
                }
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "Transaction Quantity",
                  color: "#000",
                  font: {
                    size: 18,
                    weight: 'bold',
                    lineHeight: 1.2
                  }
                }
              }
            }
          },
          data: {
            labels: this.dateArr,
            datasets: [
              {
                label: 'Sell',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                fill: false,
                tension: 0.1,
                pointHoverBorderColor: '#fff',
                // data: [0, 10, 5, 2, 20, 30, 45]
                data: this.sellNumsArr
              },
    
              {
                label: 'Buy',
                backgroundColor: '#0984e3',
                borderColor: '#0984e3',
                fill: false,
                tension: 0.1,
                pointHoverBorderColor: '#fff',
                // data: [3, 20, 1, 23, 24, 50, 100]
                data: this.buyNumsArr
              }
            ]
          }
        });

      }
      
    
    )

    

  }



}
