import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductFormService } from '../../services/product-form.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private _productFormService: ProductFormService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productFormService.create({
      title: productForm.get('title')?.value,
      price: productForm.get('price')?.value,
      description: productForm.get('description')?.value,
    }).subscribe();
  }
}
