import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaAdmissaoCooperadoComponent } from './nova-admissao-cooperado.component';
import { NovaAdmissaoCooperadoResolver } from './nova-admissao-cooperado.resolver';

const routes: Routes = [
  {
    path: 'nova-admissao', component: NovaAdmissaoCooperadoComponent, resolve: { resolve: NovaAdmissaoCooperadoResolver },
    children: [
      { path: '', loadChildren: () => import('./../home/home.module').then(m => m.HomeModule) },
      { path: '', loadChildren: () => import('./../documents/documents.module').then(m => m.DocumentsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovaAdmissaoCooperadoRoutingModule { }
