import {Component} from '@angular/core'

@Component({
  selector: 'loading-spinner',
  template: '<img *ngIf="loading" src="../../assets/images/loading.gif" />',
  inputs: ['loading']
})
export class LoadingComponent {
  loading:boolean
}
