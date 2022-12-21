import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private $title: BehaviorSubject<string> = new BehaviorSubject<string>('title')

  constructor() { }

  setTitle = (newTitle: string): void => this.$title.next(newTitle)
  titleObservable = (): Observable<string> => this.$title.asObservable()
}
