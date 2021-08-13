import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/modules/shared.module";
import { UserPageComponent } from "../user-page/user-page.component";
import { ProductAddPageComponent } from "./components/product-add-page/product-add-page.component";
import { ProductEditPageComponent } from "./components/product-edit-page/product-edit-page.component";
import { ProductTableComponent } from "./components/product-table/product-table.component";
import { ProductPageComponent } from "./product-page.component";
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { ProductDetailsAddFormComponent } from './components/product-details-page/components/product-details-add-form/product-details-add-form.component';
import { ProductDetailsChartComponent } from './components/product-details-page/components/product-details-chart/product-details-chart.component';
@NgModule({
    declarations: [
        ProductPageComponent,
        ProductTableComponent,
        ProductAddPageComponent,
        ProductEditPageComponent,
        UserPageComponent,
        ProductDetailsPageComponent,
        ProductDetailsAddFormComponent,
        ProductDetailsChartComponent
        
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