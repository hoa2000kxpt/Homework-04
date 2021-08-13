export class Transaction {
    transactionStatus: string="";
    transactionQuantity: number=0;
    transactionDate: string="";

    constructor(transactionStatus: any, transactionQuantity: any, transactionDate: any) {
        this.transactionStatus = transactionStatus;
        this.transactionQuantity = transactionQuantity;
        this.transactionDate = transactionDate;
    }
}