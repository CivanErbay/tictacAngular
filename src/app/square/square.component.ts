import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
<button nbButton *ngIf="!value"> {{value}} </button>
<button nbButton hero status="success" *ngIf="value == 'X'">{{value}}</button>
<button nbButton hero status="info" *ngIf="value == 'O'">{{value}}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
/* //Create Random Number Variable
  randomNumber = Math.random();
//Create a Random Number Variable which gets updated each 0,5 Secs
  constructor() {
    setInterval(() => this.randomNumber= Math.random(), 500 )
  } */

  @Input() value: 'X' | 'O';
}
