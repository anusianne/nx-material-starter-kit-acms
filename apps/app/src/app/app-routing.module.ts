import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductFormServiceModule } from './services/product-form.service-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductsComponent },
    { path: 'add-product', component: ProductFormComponent },
    { path: 'product/:id', component: ProductDetailComponent }
  ]), ProductsComponentModule, ProductsServiceModule, ProductFormComponentModule, ProductFormServiceModule, ProductDetailComponentModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
