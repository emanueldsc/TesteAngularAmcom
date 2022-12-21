import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StepsModule } from 'primeng/steps';
import { InputMaskModule } from 'primeng/inputmask';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { InputSwitchModule } from 'primeng/inputswitch';


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
