import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private $title: BehaviorSubject<string> = new BehaviorSubject<string>('title')
  setTitle = (newTitle: string): void => this.$title.next(newTitle)
  titleObservable = (): Observable<string> => this.$title.asObservable()

  private $breadcrumbState: Subject<MenuItem[]> = new Subject<MenuItem[]>()
  public breadcrumbStateObservable = this.$breadcrumbState.asObservable()
  set setBreadcrumbState(items: MenuItem[]) {
    this.$breadcrumbState.next(items)
  }

}
