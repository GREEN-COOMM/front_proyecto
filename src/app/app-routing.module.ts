import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagLandingComponent } from './pag-landing/pag-landing.component';
import { PagServicioComponent } from './pag-servicio/pag-servicio.component';
import { PagRecompensaComponent } from './pag-recompensa/pag-recompensa.component';

const routes: Routes = [
  {path:'', redirectTo:'pag-landing',pathMatch:'full'},
  {path:'pag-landing', component:PagLandingComponent},
  {path:'pag-servicio', component:PagServicioComponent},
  {path:'pag-recompensa',component:PagRecompensaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
