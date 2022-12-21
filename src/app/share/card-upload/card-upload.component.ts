import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-upload',
  templateUrl: './card-upload.component.html',
  styleUrls: ['./card-upload.component.sass']
})
export class CardUploadComponent implements OnInit {

  title: string = 'title'
  subTitle: string = 'subTitle'

  constructor() { }

  ngOnInit(): void {
  }

}
