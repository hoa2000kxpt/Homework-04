import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { adminGuard } from './guards/admin.guard';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminEditPageComponent } from './pages/admin-page/components/admin-edit-page/admin-edit-page.component';
import { ProductEditPageComponent } from './pages/product-page/components/product-edit-page/product-edit-page.component';
import { ProductDetailsPageComponent } from './pages/product-page/components/product-details-page/product-details-page.component';

const routes: Routes = [
  {path: 'admin', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'userManagement ', component: UserPageComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: AdminEditPageComponent, canActivate: [adminGuard]},
  {path: 'productManagement', component: ProductPageComponent, canActivate: [AuthGuard] ,data: {title: 'User Page'}},
  {path: 'productManagement/edit/:id', component: ProductEditPageComponent, canActivate: [AuthGuard]},
  {path: 'productManagement/view/:id', component: ProductDetailsPageComponent, canActivate: [AuthGuard]},
  {path: 'adminPage', component: AdminPageComponent, canActivate: [adminGuard]},
  // {path: 'adminPage', component: AdminPageComponent, data: {title: 'Admin Page'}},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
