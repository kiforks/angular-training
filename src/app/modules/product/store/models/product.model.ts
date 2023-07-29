import { ProductWarranty } from '../../interfaces/product-warranty.interface';

export interface ProductStateModel {
	isSold?: boolean;
	warranty: Nullable<ProductWarranty>;
}
