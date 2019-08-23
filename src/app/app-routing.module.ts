import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailProduitComponent } from './graphic/detail-produit/detail-produit.component';
import { ProduitComponent } from './graphic/produit/produit.component';
import { ProduitsComponent } from './graphic/produits/produits.component';


const routes: Routes = [
  { path: 'produit', component: ProduitComponent },
  { path: 'detail-produit/:Id', component: DetailProduitComponent },
  { path :'', component: ProduitsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
