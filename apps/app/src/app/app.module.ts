import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductFormServiceModule } from './services/product-form.service-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    ProductFormComponentModule,
    ProductsComponentModule,
    ProductDetailComponentModule,
    ProductsServiceModule,
    ProductFormServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
