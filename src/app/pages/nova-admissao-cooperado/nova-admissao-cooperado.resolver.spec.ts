import { TestBed } from '@angular/core/testing';

import { NovaAdmissaoCooperadoResolver } from './nova-admissao-cooperado.resolver';

describe('NovaAdmissaoCooperadoResolver', () => {
  let resolver: NovaAdmissaoCooperadoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NovaAdmissaoCooperadoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
