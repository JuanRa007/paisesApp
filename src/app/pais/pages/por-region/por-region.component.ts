import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';



@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `

  ]
})
export class PorRegionComponent {

  // Regiones
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  hayError: boolean = false;
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    // Se controla que no nos vuelvan a pedir la misma región.
    if (region !== this.regionActiva) {

      this.regionActiva = region;
      this.paises = [];

      this.paisService.buscarRegion(region)
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

}
