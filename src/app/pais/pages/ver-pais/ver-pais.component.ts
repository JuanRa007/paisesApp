import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;     // ! le digo a TypeScrip que yo sé que puede ser null la variable.

  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    /*     
        this.activateRoute.params
          // Este "params" recibe el parámetro indicado en el "app-routing.module.ts": path:'pais/:id'
          // .subscribe(params => {
          //   console.log(params);
          // });
    
          // Esto es como params.id
          .subscribe(({ id }) => {
            console.log(id);
    
            this.paisService.getPaisPorAlpha(id)
              .subscribe(pais => {
                console.log(pais);
              });
    
          })
      */

    // Nueva versión. En el código anterior se hacìa un "subscribe" dentro de otro.
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)      // Recibe la respuesta de getpaisporalpha y la imprime en consola.
      )
      .subscribe(pais => this.pais = pais)

  }


}
