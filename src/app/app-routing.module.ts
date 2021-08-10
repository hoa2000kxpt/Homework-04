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

const routes: Routes = [
  {path: 'admin', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'userManagement ', component: UserPageComponent},
  {path: 'edit/:id', component: AdminEditPageComponent},
  {path: 'productManagement', component: ProductPageComponent},
  // {path: 'adminPage', component: AdminPageComponent, canActivate: [adminGuard]},
  {path: 'adminPage', component: AdminPageComponent},
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
