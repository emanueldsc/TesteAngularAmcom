import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faMessage, faStar } from '@fortawesome/free-regular-svg-icons';
import { faBank, faBars, faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  logo = faAngular
  menu = faBars
  search = faMagnifyingGlass
  star = faStar
  balloon = faMessage
  panel = faSliders
  bank = faBank

  constructor(
    private primeConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primeConfig.ripple = true
  }

}
