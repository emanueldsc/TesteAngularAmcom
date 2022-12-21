import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from '../documents/documents.component';
import { DocumentsRoutingModule } from './documents-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { PrimeNgModule } from 'src/app/libs/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DocumentsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DocumentsRoutingModule,
    ShareModule,
    PrimeNgModule
  ]
})
export class DocumentsModule { }
