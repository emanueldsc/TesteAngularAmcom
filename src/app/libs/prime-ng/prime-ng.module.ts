import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { StepsModule } from 'primeng/steps';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RippleModule,
    BreadcrumbModule,
    StepsModule,
    CardModule,
    SidebarModule,
    InputSwitchModule
  ],
  exports: [
    RippleModule,
    BreadcrumbModule,
    StepsModule,
    InputMaskModule,
    CardModule,
    SidebarModule,
    InputSwitchModule
  ]
})
export class PrimeNgModule { }
