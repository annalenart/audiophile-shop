import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':slug',
        component: ProductDetailsComponent
      }
    ])
  ]
})
export class ProductDetailsModule { }
