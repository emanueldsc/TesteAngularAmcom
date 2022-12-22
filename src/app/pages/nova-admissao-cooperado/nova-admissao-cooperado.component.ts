import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NovaAdmissaoCooperadoService } from './nova-admissao-cooperado.service';

@Component({
  selector: 'app-nova-admissao-cooperado',
  templateUrl: './nova-admissao-cooperado.component.html',
  styleUrls: ['./nova-admissao-cooperado.component.sass'],
})
export class NovaAdmissaoCooperadoComponent implements OnInit {

  items: MenuItem[] = []

  stepActiveIndex: number = 0

  constructor(
    private novaAdmissaoCooperadoService: NovaAdmissaoCooperadoService
  ) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Início' },
      { label: 'Documentos' },
      { label: 'Dados cadastrais' },
      { label: 'Admissão' }
    ];

    this.novaAdmissaoCooperadoService.stepStateObservable.subscribe(data => {
      this.stepActiveIndex = data
    })
  }

}
