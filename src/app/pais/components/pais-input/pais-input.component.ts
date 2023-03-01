import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  // Hay que emitir "termino" para que lo muestre en la tabla. Le pongo un nombre "onEnter" (o cualquier otro).
  // El tipado "<string>" se debe a que "termino" es una cadena.
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  buscar() {
    // console.log('Hola mundo');
    // console.log(this.termino);

    this.onEnter.emit(this.termino);
  }

}
