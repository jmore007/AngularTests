import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  aDatos: Array<string>;
  constructor() {
    this.aDatos = ['Ayayayayayayayayay', 'El chihuahua y el mariachi', 'La venganza de Jose'];
   }

  buscarMock(clave) {
    return this.aDatos;
  }

  buscarMockAsync(clave) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(JSON.stringify(this.aDatos));
        }
        , 1000);
    });
  }
}
