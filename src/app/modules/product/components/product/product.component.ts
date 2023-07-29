import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProductWarranty } from '../../interfaces/product-warranty.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductAddWarranty } from '../../store/actions/product.actions';

@Component({
	selector: 'product',
	templateUrl: './product.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	public warranty: WritableSignal<Nullable<ProductWarranty>> = signal(null);

	public readonly formGroup = new FormGroup({
		dateAdded: new FormControl<string>('2023-07-30', [Validators.required]),
		dateExpiration: new FormControl<string>('2023-08-30', [Validators.required]),
		description: new FormControl<string>('Some description', [Validators.required]),
		extended: new FormControl<boolean>(true),
	});

	constructor(private readonly store: Store) {}

	public addWarrantySubmit(event: Event): void {
		event.preventDefault();

		const warranty = this.formGroup.value as ProductWarranty;

		this.store.dispatch(new ProductAddWarranty(warranty));

		this.warranty.update(() => warranty);

		this.formGroup.reset();
	}
}
