import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';



const routes: Routes = [

  // Ruta Principal: 
  // Al ser un path vacío, a la hora de mostrarlo activo en el menú nos obliga a incluir la clase:
  // [routerLinkActiveOptions]="{exact:true}" en el <li> del menú.
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: "full"
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent
  },
  // Cualquier otra dirección no contemplada, se manda a la ruta principal ''.
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }