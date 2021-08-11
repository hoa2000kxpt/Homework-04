export class Products {
    id: string="";
    name: string="";
    keyNo: number=0;
    price: string="";
    image: string="";
    description: string="";

    constructor(id: any, name: any, keyNo: any, price: any, image: any, description: any) {
        this.id = id;
        this.name = name;
        this.keyNo = keyNo;
        this.price = price;
        this.image = image;
        this.description = description;

    }       
}