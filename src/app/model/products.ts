export class Products {
    id: string="";
    name: string="";
    keyNo: number=0;
    price: string="";

    constructor(id: any, name: any, keyNo: any, price: any) {
        this.id = id;
        this.name = name;
        this.keyNo = keyNo;
        this.price = price;
    }       
}