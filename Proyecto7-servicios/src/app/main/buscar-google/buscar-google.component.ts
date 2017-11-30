import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-buscar-google',
  templateUrl: './buscar-google.component.html',
  styleUrls: ['./buscar-google.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuscarGoogleComponent implements OnInit {

  sURL: string;
  aLibros: Array<string>;
  sClave: string;

  constructor( /*public http: HttpClient*/) { }

  ngOnInit() {
    this.sURL = 'https://www.google.com/books/v1/volumes?q=intitle:';
    this.aLibros = [];
    this.sClave = '';
  }

  buscar() {/*
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.http.get(url).toPromise().then(
      (response) => {
        console.log(response);
      }
    );
    */
    //    this.aLibros = this.librosService.buscarMock(this.sClave);
  }

}
