import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
  <div>
    <h1>
      <img class="img-fluid" alt="Angular Logo" [src]="logoImg">
    </h1>
  </div>
  `,
  styles: []
})
export class LogoComponent implements OnInit {

  logoImg: string;

  constructor() {
   }

  ngOnInit() {
    this.logoImg = '../../../assets/logo_angular.svg';
  }

}
