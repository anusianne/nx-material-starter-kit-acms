import { NgModule } from '@angular/core';
import { ProductFormService } from './product-form.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [ProductFormService],
  exports: []
})
export class ProductFormServiceModule {
}
