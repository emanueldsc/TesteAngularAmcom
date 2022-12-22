import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  bellIcon = faBell
  gearIcon = faGear

  title: Observable<string> = this.headerService.titleObservable()

  items: MenuItem[] = []

constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {

    this.headerService.breadcrumbStateObservable.subscribe(data => {
      this.items = data
    })

  }



}
