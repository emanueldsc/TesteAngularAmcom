import { TestBed } from '@angular/core/testing';

import { NovaAdmissaoCooperadoService } from './nova-admissao-cooperado.service';

describe('NovaAdmissaoCooperadoService', () => {
  let service: NovaAdmissaoCooperadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovaAdmissaoCooperadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
