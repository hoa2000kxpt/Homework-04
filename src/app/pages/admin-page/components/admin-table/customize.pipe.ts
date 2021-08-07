import { PipeTransform, Pipe } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe ({
    name: "convertDate"
})

export class customizePipe implements PipeTransform{
    transform(value: any) {
        var datePipe = new DatePipe("en-US");
         value = datePipe.transform(value, 'dd/MM/yyyy');
         return value;
     }
}