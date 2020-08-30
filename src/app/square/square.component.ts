import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      square works!
      {{randomNumber}}
    </p>
  `,
  styles: [
]
})
export class SquareComponent {
//First Approach of creating a variable
  randomNumber = Math.random();

  constructor() {
    setInterval(() => this.randomNumber= Math.random(), 500 )
  }
}
