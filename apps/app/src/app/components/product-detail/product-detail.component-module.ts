import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailComponent } from './product-detail.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [MatCardModule, CommonModule, HttpClientModule],
  declarations: [ProductDetailComponent],
  providers: [],
  exports: [ProductDetailComponent]
})
export class ProductDetailComponentModule {
}
