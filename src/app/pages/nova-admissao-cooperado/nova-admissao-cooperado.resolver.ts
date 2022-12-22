import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HeaderService } from 'src/app/services/header.service';

@Injectable({
  providedIn: 'root'
})
export class NovaAdmissaoCooperadoResolver implements Resolve<boolean> {

  constructor(private headerService: HeaderService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.headerService.setTitle("NOVA ADMISSÃO COOPERADO")
    this.headerService.setBreadcrumbState = [
      { label: 'Cadastro' },
      { label: 'Admissão do Cooperado' },
      { label: 'Nova Admissao de Cooperado' },
    ]
    return of(true);
  }
}
