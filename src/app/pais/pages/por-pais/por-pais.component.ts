import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  // Propiedades
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  // Injectamos el servicio para poder usarlo
  constructor(private paisService: PaisService) { }


  buscar(termino: string) {

    this.hayError = false;
    // Pasamos lo que recibimos (termino) a la propiedad de la clase.
    this.termino = termino;
    // console.log(this.termino);
    this.mostrarSugerencias = false;


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

  sugerencias(termino: string) {
    this.hayError = false;
    // Pasamos lo que recibimos (termino) a la propiedad de la clase.
    this.termino = termino;
    // console.log(this.termino);
    this.mostrarSugerencias = true;


    // Crear sugerencias.
    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5), (err) => this.paisesSugeridos = []);

  }


  buscarSugerido(termino: string) {

    this.buscar(termino);

  }

}
