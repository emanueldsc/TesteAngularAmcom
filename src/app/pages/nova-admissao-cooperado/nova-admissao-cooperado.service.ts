import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovaAdmissaoCooperadoService {

  private $stepState: Subject<number> = new Subject()
  public stepStateObservable = this.$stepState.asObservable()

  set setStep(index: number) {
    this.$stepState.next(index)
  }

}
