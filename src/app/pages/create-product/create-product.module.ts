//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { CreateProductComponent } from './create-product.component';

//#endregion

const routes: Routes = [{ path: '', component: CreateProductComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxMaskModule,
  ],
  declarations: [
    CreateProductComponent,
  ],
})
export class CreateProductModule {}
