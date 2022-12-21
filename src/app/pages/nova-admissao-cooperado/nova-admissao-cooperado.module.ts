import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from 'src/app/libs/prime-ng/prime-ng.module';
import { ShareModule } from 'src/app/share/share.module';
import { NovaAdmissaoCooperadoRoutingModule } from './nova-admissao-cooperado-routing.module';
import { NovaAdmissaoCooperadoComponent } from './nova-admissao-cooperado.component';


@NgModule({
  declarations: [NovaAdmissaoCooperadoComponent],
  imports: [
    CommonModule,
    NovaAdmissaoCooperadoRoutingModule,
    PrimeNgModule,
    ShareModule
  ]
})
export class NovaAdmissaoCooperadoModule { }
