import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainLayoutComponent } from './modules/layouts/main/main.component';
import { DefaultLayoutComponent } from './modules/layouts/default/default.component';

import { MaterialModule } from './shared/material-module';
import { SharedModule } from './shared/shared.module';

import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { ServiceComponent } from './modules/service/service.component';
import { ServiceDetailsComponent } from './modules/service/service-details/service-details.component';
import { ServiceCategoryComponent } from './modules/service/service-category/service-category.component';
import { AboutUsComponent } from './modules/common/about-us/about-us.component';
import { ContactUsComponent } from './modules/common/contact-us/contact-us.component';
import { CareerComponent } from './modules/common/career/career.component';
import { ServiceListComponent } from './modules/service/service-list/service-list.component';
import { ServiceRequestComponent } from './modules/service/service-request/service-request.component';
import { ProductComponent } from './modules/products/product.component';
import { ProductCategoryComponent } from './modules/products/product-category/product-category.component';
import { ProductDetailsComponent } from './modules/products/product-details/product-details.component';
import { ProductListComponent } from './modules/products/product-list/product-list.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: "Loading...",
  textColor: "#FFFFFF",
  textPosition: "center-center",
  bgsColor: "#7b1fa2",
  fgsColor: "#7b1fa2",
  fgsType: SPINNER.squareJellyBox,
  fgsSize: 100,
  hasProgressBar: false

}
@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    MainLayoutComponent,
    // Main Modules
    HomeComponent,
    SignupComponent,
    LoginComponent,
    // Service Components
    ServiceComponent,
    ServiceListComponent,
    ServiceDetailsComponent,
    ServiceCategoryComponent,
    ServiceRequestComponent,
    // Product Components
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCategoryComponent,
    // Common Components
    AboutUsComponent,
    ContactUsComponent,
    CareerComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
