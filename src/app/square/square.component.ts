import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
<button nbButton *ngIf="!value"> {{value}} </button>
  `,
  styles: []
})
export class SquareComponent {
//Create Random Number Variable
  randomNumber = Math.random();
//Create a Random Number Variable which gets updated each 0,5 Secs
  constructor() {
    setInterval(() => this.randomNumber= Math.random(), 500 )
  }

  @Input() value: 'X' | 'O';
}
