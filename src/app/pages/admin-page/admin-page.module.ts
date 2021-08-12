import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UniqueEmailValidatorDirective } from "src/app/directives/unique-email-validator.directive";
import { SharedModule } from "src/app/modules/shared.module";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { AdminPageComponent } from "./admin-page.component";
import { AdminAddedPageComponent } from "./components/admin-added-page/admin-added-page.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { AdminEditPageComponent } from "./components/admin-edit-page/admin-edit-page.component";
import { AdminTableComponent } from "./components/admin-table/admin-table.component";
import { customizePipe } from "./components/admin-table/customize.pipe";
import { GenderPipePipe } from "./components/admin-table/gender-pipe.pipe";

@NgModule({
    declarations: [
        AdminTableComponent,
        AdminAddedPageComponent,
        AdminPageComponent,
        LoginComponent,
        RegisterComponent,
        customizePipe,
        GenderPipePipe,
        AdminEditPageComponent,
        UniqueEmailValidatorDirective
    ],
    imports: [
        SharedModule
        
    ],
    exports: [
        AdminTableComponent,
        AdminAddedPageComponent,
        AdminPageComponent,
        LoginComponent,
        RegisterComponent,
        AdminEditPageComponent,
        customizePipe,
        GenderPipePipe,
        UniqueEmailValidatorDirective
    ]
})
export class AdminPageModule {

}