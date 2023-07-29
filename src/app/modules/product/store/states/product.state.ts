import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ProductStateModel } from '../models/product.model';
import { ProductAddWarranty } from '../actions/product.actions';
import { ProductWarranty } from '../../interfaces/product-warranty.interface';
import { Injectable } from '@angular/core';

@State<ProductStateModel>({
	name: 'product',
	defaults: {
		warranty: null,
	},
})
@Injectable()
export class ProductState {
	@Selector()
	public static getWarranty({ warranty }: ProductStateModel): Nullable<ProductWarranty> {
		return warranty;
	}

	@Action(ProductAddWarranty)
	public addWarranty({ patchState }: StateContext<ProductStateModel>, { warranty }: ProductAddWarranty): void {
		patchState({ warranty });
	}
}
