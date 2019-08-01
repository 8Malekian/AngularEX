import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailProduitComponent } from './graphic/detail-produit/detail-produit.component';
import { ListProduitComponent } from './graphic/list-produit/list-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailProduitComponent,
    ListProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
