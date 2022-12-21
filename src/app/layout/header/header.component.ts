import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {


  title: Observable<string> = this.headerService.titleObservable()

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {

  }

}
