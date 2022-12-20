import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimeNgModule } from '../libs/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    ContainerComponent,
    NavbarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PrimeNgModule
  ],
  exports: [
    ContainerComponent,
    NavbarComponent,
    HeaderComponent,
  ]
})
export class LayoutModule { }
