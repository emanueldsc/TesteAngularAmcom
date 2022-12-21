import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nova-admissao-cooperado',
  templateUrl: './nova-admissao-cooperado.component.html',
  styleUrls: ['./nova-admissao-cooperado.component.sass']
})
export class NovaAdmissaoCooperadoComponent implements OnInit {

  items: MenuItem[] = []

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' }
    ];
  }

}
