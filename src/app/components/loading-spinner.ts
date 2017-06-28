import {Component, Input} from '@angular/core'

@Component({
  selector: 'loading-spinner',
  template: '<img *ngIf="loading" src="../../assets/images/loading.gif" />'
})
export class LoadingSpinnerComponent {
  @Input() loading:boolean
}
