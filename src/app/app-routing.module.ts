import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // home
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  // documents
  { path: '', loadChildren: () => import('./pages/documents/documents.module').then(m => m.DocumentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
