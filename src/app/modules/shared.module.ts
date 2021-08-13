import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from "../app-routing.module";
import { AdminDashboardComponent } from "../pages/admin-page/components/admin-dashboard/admin-dashboard.component";
import { HeaderComponent } from "../pages/header/header.component";
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    declarations: [
        HeaderComponent,
        AdminDashboardComponent,
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        DataTablesModule,
        FontAwesomeModule,
        MatSelectModule,
        MatListModule,
        MatRadioModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HeaderComponent,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        DataTablesModule,
        FontAwesomeModule,
        MatSelectModule,
        MatListModule,
        MatRadioModule,
        MatInputModule,
        AdminDashboardComponent,
        MatButtonModule
    ],

})
export class SharedModule {

}