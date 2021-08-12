import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { AuthService } from './authentication/auth.service';
import { ProductPageModule } from './pages/product-page/product-page.module';
import { SharedModule } from './modules/shared.module';
import { AdminPageModule } from './pages/admin-page/admin-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductPageModule,
    AdminPageModule,
    SharedModule
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
