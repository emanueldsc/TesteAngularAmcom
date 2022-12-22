import { Component, OnInit } from '@angular/core';
import { NovaAdmissaoCooperadoService } from '../nova-admissao-cooperado/nova-admissao-cooperado.service';
import { StepperCooperadoStatus } from '../nova-admissao-cooperado/StepperCooperadoStatus';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.sass']
})
export class DocumentsComponent implements OnInit {

  inputSwitch: boolean = false

  constructor(
    private novaAdmissaoCooperadoService: NovaAdmissaoCooperadoService
  ) { }

  ngOnInit(): void {
    this.novaAdmissaoCooperadoService.setStep = StepperCooperadoStatus.DOCUMENTOS
  }

}
