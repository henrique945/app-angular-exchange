//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProductInfoComponent } from './product-info.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ProductInfoComponent,
  ],
  declarations: [
    ProductInfoComponent,
  ],
})
export class ProductInfoModule {}
