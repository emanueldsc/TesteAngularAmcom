import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StepsComponent } from './steps/steps.component';



@NgModule({
  declarations: [
    StepsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StepsComponent,
  ]
})
export class ShareModule { }
