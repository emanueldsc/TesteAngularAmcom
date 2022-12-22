import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardUploadComponent } from './card-upload/card-upload.component';

@NgModule({
  declarations: [
    CardUploadComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardUploadComponent,
  ]
})
export class ShareModule { }
