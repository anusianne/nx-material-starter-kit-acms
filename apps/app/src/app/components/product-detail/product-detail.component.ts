import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  styleUrls: ['./product-detail.component.scss'],
  templateUrl: './product-detail.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {

  readonly params$: Observable<ProductsModel>=this._productsService.getOne('id');

  // readonly paramsId$: Observable<ProductsModel[]> = this._activatedRoute.params.pipe(
  //   map(params => ({
  //     id: params['id'],
  //     name: params['name'],
  //
  //   }))
  // )

  constructor(
    private _activatedRoute: ActivatedRoute, private _productsService: ProductsService
  ) {
  }
}
