import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StepsComponent } from './steps/steps.component';
import { CardUploadComponent } from './card-upload/card-upload.component';

@NgModule({
  declarations: [
    StepsComponent,
    CardUploadComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StepsComponent,
    CardUploadComponent,
  ]
})
export class ShareModule { }
