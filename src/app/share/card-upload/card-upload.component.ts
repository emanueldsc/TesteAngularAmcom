import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-upload',
  templateUrl: './card-upload.component.html',
  styleUrls: ['./card-upload.component.sass']
})
export class CardUploadComponent{

  @Input() title: string = 'title'
  @Input() subTitle: string = 'subTitle'
  @Input() optional: boolean = false

  fileSelected: any

  @ViewChild('imageSelectVM') imageSelectVM?: ElementRef

  @Output('getImage') emiter = new EventEmitter<any>()

  constructor() { }

  onFileSelect(event: Event): void {
    event.preventDefault()
    this.fileSelected = (<any>event.target).files[0]
    const fReader = new FileReader()
    fReader.addEventListener('load', () => {
      (<any>this.imageSelectVM).nativeElement.src = fReader.result
      this.emiter.emit(this.fileSelected)
    })
    fReader.readAsDataURL(this.fileSelected)
  }

}
