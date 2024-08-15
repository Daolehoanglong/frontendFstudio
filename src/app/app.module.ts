import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // khai báo dùng cho routes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryAddComponent } from './components/Category-add/Category-add.component';
import { CategoryListComponent } from './components/Category-list/Category-list.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './components/Category-delete/Category-delete.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { DetailComponent } from './components/detail/detail.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { CheckCodeComponent } from './components/CheckCode/CheckCode.component';
import { UpdatePassComponent } from './components/UpdatePass/UpdatePass.component';
import { ProductComponent } from './components/product/product.component';
import { MyAccountComponent } from './components/MyAccount/MyAccount.component';
import { Auth } from './auth/Auth';
import { Admin } from './auth/Admin';




// CategoryAddComponent
// CategoryListComponent

// Định nghĩa các roures trong dự án
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'category-list', component: CategoryListComponent , canActivate:[Admin] },
  { path: 'category-add', component: CategoryAddComponent },
  { path: 'category-edit/:id', component: CategoryEditComponent },
  { path: 'category-delete/:id', component: CategoryDeleteComponent },
  { path: 'product-list', component: ProductListComponent , canActivate:[Admin] },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: 'product-delete/:id', component: ProductDeleteComponent },
  { path: 'detail/:id', component: DetailComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotPassComponent },
  { path: 'check', component: CheckCodeComponent },
  { path: 'update', component: UpdatePassComponent },
  { path: 'product', component: ProductComponent },
  { path: 'myAcc', component: MyAccountComponent , canActivate:[Auth] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    DetailComponent,
    RegisterComponent,
    ForgotPassComponent,
    CheckCodeComponent,
    UpdatePassComponent,
    ProductComponent,
    MyAccountComponent
   ],
  imports: [
    BrowserModule,
    /*
    FormsModule được sử dụng cho các biểu mẫu
    ví dụ: khi sử dụng binding 2 chiều ([(ngModel)] = "product.productName") trong form > input (component.html) thì xuất hiện lỗi "Can't bind to 'ngModel'..."
    */
    FormsModule,
    ReactiveFormsModule,
    /*
    Angular thường được sử dụng để phát triển ứng dụng đơn trang (SPA),
    và RouterModule được sử dụng để thiết lập định tuyến trong ứng dụng của bạn.
    Phương thức forRoot để nạp các thông tin của Routes.
    */
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
