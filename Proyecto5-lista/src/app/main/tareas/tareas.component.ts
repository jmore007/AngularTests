import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  aTareas: [string];
  sTarea: string;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('tareas')) {
      this.aTareas = JSON.parse(localStorage.getItem('tareas'));
    }
  }

  addTareas() {
    this.aTareas.push(this.sTarea);
    this.updateStorage();
    this.sTarea = '';
  }

  delete(index: number) {
    if (index != null) {
      this.aTareas.splice(index, 1);
      this.updateStorage();
    }
  }

  private updateStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.aTareas));
  }

}
