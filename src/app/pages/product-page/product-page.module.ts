import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/modules/shared.module";
import { UserPageComponent } from "../user-page/user-page.component";
import { ProductAddPageComponent } from "./components/product-add-page/product-add-page.component";
import { ProductEditPageComponent } from "./components/product-edit-page/product-edit-page.component";
import { ProductTableComponent } from "./components/product-table/product-table.component";
import { ProductPageComponent } from "./product-page.component";
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';


@NgModule({
    declarations: [
        ProductPageComponent,
        ProductTableComponent,
        ProductAddPageComponent,
        ProductEditPageComponent,
        UserPageComponent,
        ProductDetailsPageComponent
        
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ProductPageComponent,
        ProductTableComponent,
        ProductAddPageComponent,
        ProductEditPageComponent,
        UserPageComponent
    ]
})
export class ProductPageModule {

}