import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { ProductModule } from './modules/product/product.module';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxsModule.forRoot([], {
			developmentMode: true,
		}),
		NgxsReduxDevtoolsPluginModule.forRoot(),
		NgxsFormPluginModule.forRoot(),
		NgxsStoragePluginModule.forRoot({ key: ['forms'] }),
		NgxsSelectSnapshotModule.forRoot(),
		ProductModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
