import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductWarrantyListComponent } from './components/product-warranty-list/product-warranty-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './store/states/product.state';

const components = [ProductComponent, ProductWarrantyListComponent];

@NgModule({
	declarations: [components],
	imports: [CommonModule, ReactiveFormsModule, NgxsModule.forFeature([ProductState])],
	exports: [components],
})
export class ProductModule {}
