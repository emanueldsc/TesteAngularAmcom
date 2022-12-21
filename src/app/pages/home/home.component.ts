import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { User } from 'src/app/domain/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  cpf: string = ""

  // icons
  user = faUser
  check = faCheckCircle
  noCheck = faTimesCircle

  userVM?: User
  stateFindCpfButton: boolean = false

  showTips: boolean = false

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.userObservable().subscribe(user => {
      if (user){
        this.userVM = user
        this.stateFindCpfButton = false
      }
    })
  }

  findCpf(form: NgForm) {
    this.stateFindCpfButton = true
    const { cpf } = form.value
    this.userService.findUser(cpf)
  }

}
