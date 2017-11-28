import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="container">
    <article class="row alto">
      <app-tareas></app-tareas>
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
