import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { SubSink } from 'subsink';
import { Select } from '@ngxs/store';
import { ProductState } from '../../store/states/product.state';
import { Observable } from 'rxjs';
import { ProductWarranty } from '../../interfaces/product-warranty.interface';

@Component({
	selector: 'product-warranty-list',
	templateUrl: './product-warranty-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductWarrantyListComponent implements OnInit, OnDestroy {
	@Select(ProductState.getWarranty) public readonly warrantyState$!: Observable<ProductWarranty>;

	public readonly warrantyList = signal<ProductWarranty[]>([]);

	private readonly subs = new SubSink();

	public ngOnInit(): void {
		this.subs.sink = this.warrantyState$.subscribe(warranty => {
			this.warrantyList.mutate(data => warranty && data.push(warranty));
		});
	}

	public ngOnDestroy(): void {
		this.subs.unsubscribe();
	}
}
