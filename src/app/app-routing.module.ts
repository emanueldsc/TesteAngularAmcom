import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'nova-admissao', pathMatch: 'full' },
  // nova-admissao
  { path: '', loadChildren: () => import('./pages/nova-admissao-cooperado/nova-admissao-cooperado.module').then(m => m.NovaAdmissaoCooperadoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
