import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminTableComponent } from './pages/admin-page/components/admin-table/admin-table.component';
import { AdminAddedPageComponent } from './pages/admin-page/components/admin-added-page/admin-added-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './pages/admin-page/components/admin-dashboard/admin-dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { DataTablesModule } from "angular-datatables";
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {customizePipe} from './pages/admin-page/components/admin-table/customize.pipe';
import { GenderPipePipe } from './pages/admin-page/components/admin-table/gender-pipe.pipe';
import {MatSelectModule} from '@angular/material/select';
import { AdminEditPageComponent } from './pages/admin-page/components/admin-edit-page/admin-edit-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductTableComponent } from './pages/product-page/components/product-table/product-table.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AuthService } from './authentication/auth.service';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { UniqueEmailValidatorDirective } from './directives/unique-email-validator.directive';
import { ProductAddPageComponent } from './pages/product-page/components/product-add-page/product-add-page.component';
import {MatInputModule} from '@angular/material/input';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ProductEditPageComponent } from './pages/product-page/components/product-edit-page/product-edit-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminTableComponent,
    AdminAddedPageComponent,
    AdminPageComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    customizePipe,
    GenderPipePipe,
    AdminEditPageComponent,
    ProductPageComponent,
    ProductTableComponent,
    UserPageComponent,
    UniqueEmailValidatorDirective,
    ProductAddPageComponent,
    ProductEditPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
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
    AngularFileUploaderModule,

  ],
  providers: [
    UpperCasePipe,
    AuthService,
    Title,
    CurrencyPipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
