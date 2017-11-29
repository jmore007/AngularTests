import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="container">
    <article class="alto">
      <app-form-md></app-form-md>
      <app-form-td></app-form-td>
    </article>
  </div>
  `,
  styles: [
    `.alto{
      min-height: 10rem;
    }`
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
