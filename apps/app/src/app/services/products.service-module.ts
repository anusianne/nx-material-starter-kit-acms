import { NgModule } from '@angular/core';
import { ProductsService } from './products.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [ProductsService],
  exports: []
})
export class ProductsServiceModule {
}
