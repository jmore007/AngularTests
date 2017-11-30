import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-mock-libros-async',
  templateUrl: './mock-libros-async.component.html',
  styleUrls: ['./mock-libros-async.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MockLibrosAsyncComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;
  constructor( public librosService: LibrosService) { }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  buscar() {
    this.librosService.buscarMockAsync(this.sClave)
    .then(JSON.parse)
    .then(
      (response) => { this.aLibros = response; }, // Función en caso de OK
      () => {} // Función en caso de error
    );
  }

}
