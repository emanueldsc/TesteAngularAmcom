import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PrimeNgModule } from 'src/app/libs/prime-ng/prime-ng.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ShareModule } from 'src/app/share/share.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule,
    HomeRoutingModule,
    ShareModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
