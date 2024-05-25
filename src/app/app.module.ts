import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PagLandingComponent } from './pag-landing/pag-landing.component';
import { PagServicioComponent } from './pag-servicio/pag-servicio.component';
import { PagRecompensaComponent } from './pag-recompensa/pag-recompensa.component';
import { EmailValidatorComponent } from './email-validator/email-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PagLandingComponent,
    PagServicioComponent,
    PagRecompensaComponent,
    EmailValidatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
