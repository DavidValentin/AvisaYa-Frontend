import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { InicioComponent } from './layout/inicio/inicio.component';
import { DelictivoModule } from './delictivo/delictivo.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    InicioComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, DelictivoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
