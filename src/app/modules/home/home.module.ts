import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { ExamplesProductsComponent } from './examples-products/examples-products.component';

@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    ExamplesProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    SharedModule
  ]
})
export class HomeModule { }
