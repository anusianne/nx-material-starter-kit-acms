import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {Observable} from "rxjs";
import {ProductsModel} from "../../models/products.model";

export interface Categories {
  name: string
}
@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.scss'],
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  readonly products$: Observable<ProductsModel[]>=this._productsService.getAll()

  categories: Categories[] = [
    {name: 'electronics'},
    {name: 'jewelery'},
    {name: 'mens clothing'},
    {name: 'womens clothing'},
  ]

  remove(id:string) {
    this._productsService.delete(id).subscribe();
  }

  constructor(private _productsService: ProductsService) {
  }
}
