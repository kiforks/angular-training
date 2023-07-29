import { ProductWarranty } from '../../interfaces/product-warranty.interface';

export class ProductAddWarranty {
	public static readonly type = '[Product] add warranty';

	constructor(public warranty: ProductWarranty) {}
}
