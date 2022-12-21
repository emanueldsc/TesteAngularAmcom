import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
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
  loadSpinner = faSpinner

  userVM?: User

  @ViewChild('btnFindCpf') btnFindCpf: ElementRef | undefined;

  statusLabelFindBtn: 'ready' | 'searching' | 'found' = 'ready'

  showTips: boolean = false
  invalidCpf: boolean = false

  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.userService.userObservable().subscribe(user => {
      if (user) {
        this.userVM = user
        this.statusLabelFindBtn = 'found'
      }
    });
  }

  findCpf(form: NgForm): void {
    if (this.statusLabelFindBtn != 'ready')
      return
    let { cpf } = form.value
    cpf = cpf.replace(/\D/g, '')
    this.setStateButton('disabled')
    if (cpf?.length == 11) {
      this.statusLabelFindBtn = 'searching'
      this.userService.findUser(cpf)
      return
    } else {
      this.invalidCpf = true
    }
    this.setStateButton('active')
  }

  focusInputCPF(): void {
    this.invalidCpf = false
  }

  private setStateButton(state: 'active' | 'disabled'): void {
    state === 'disabled' && this.btnFindCpf?.nativeElement.setAttribute("disabled", "disabled")
    state === 'active' && this.btnFindCpf?.nativeElement.removeAttribute("disabled")
  }

  proceed(): void {
    this.route.navigate(['/nova-admissao','documents'])
  }

}
