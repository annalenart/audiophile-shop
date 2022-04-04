import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: async () => import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'categories',
    loadChildren: async () => import('./modules/category/category.module').then((m) => m.CategoryModule)
  },
  {
    path: 'product-details',
    loadChildren: async () => import('./modules/product-details/product-details.module').then((m) => m.ProductDetailsModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
