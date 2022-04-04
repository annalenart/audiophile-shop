import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }
