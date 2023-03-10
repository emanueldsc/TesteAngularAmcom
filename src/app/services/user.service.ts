import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, delay, Observable, Subject } from 'rxjs';
import { UserNotValid, UserValid } from '../constants/User';
import { User } from '../domain/interfaces/User';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private $user: Subject<User| null> = new Subject<User| null>()
  public userObservable = () => this.$user.asObservable().pipe(delay(1000 * 1))

  findUser(cpf: string): void {
    if(cpf == '11122233344')
      this.$user.next(UserValid)
    else if ('11111111111')
      this.$user.next(UserNotValid)
  }



}
