import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

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

  // Injectamos el servicio para poder usarlo
  constructor(private paisService: PaisService) { }


  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises);

      }, (err) => {
        // console.log('Error....');
        // console.info(err);
        this.hayError = true;
      });

  }

}
