import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryItemComponent } from './category-list/category-item/category-item.component';
import { ShopDescriptionComponent } from './shop-description/shop-description.component';



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryItemComponent,
    ShopDescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CategoryListComponent,
    ShopDescriptionComponent
  ]
})
export class SharedModule { }
