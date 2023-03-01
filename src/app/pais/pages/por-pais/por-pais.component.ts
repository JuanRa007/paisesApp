import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  // Propiedad
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  // Injectamos el servicio para poder usarlo
  constructor(private paisService: PaisService) { }


  buscar(termino: string) {

    this.hayError = false;
    // Pasamos lo que recibimos (termino) a la propiedad de la clase.
    this.termino = termino;
    // console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;

      }, (err) => {
        // console.log('Error....');
        // console.info(err);
        this.hayError = true;
        this.paises = [];
      });

  }

}
