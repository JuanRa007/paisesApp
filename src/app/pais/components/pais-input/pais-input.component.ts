import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  // Hay que emitir "termino" para que lo muestre en la tabla. Le pongo un nombre "onEnter" (o cualquier otro).
  // El tipado "<string>" se debe a que "termino" es una cadena.
  // On Enter: se emitirá cuando el usuario pulse la tecla "enter" en el campo de búsqueda.
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // Debounce Time: se emitirá al dejar de escribir en la búsqueda.
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();


  @Input() placeholder: string = '';


  // Observable: que se emita al dejar de escribir.
  debouncer: Subject<string> = new Subject();

  termino: string = '';


  // Se dispara una única vez, cuando el componente es creado.
  ngOnInit(): void {
    // Me suscribo a sus eventos (eventos del DEBOUNCER)
    this.debouncer
      .pipe(debounceTime(300))      // Genera un retardo de 300 ms antes de emitir un nuevo evento.
      .subscribe(valor => {
        // console.log('Debouncer: ', valor);
        this.onDebounce.emit(valor);

      });
  }

  buscar() {
    // console.log('Hola mundo');
    // console.log(this.termino);

    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {

    // Obtenemos el valor de la tecla pulsada mediante el envío de la variable "event: any".
    // (podráimos obtenerlo también desde la variable 'termino').
    // const valor = event.target.value;

    // Vamos a emitir un valor.
    this.debouncer.next(this.termino);


  }

}
