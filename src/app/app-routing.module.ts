import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailProduitComponent } from './graphic/detail-produit/detail-produit.component';
import { ProduitComponent } from './graphic/produit/produit.component';
import { ProduitsComponent } from './graphic/produits/produits.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'produit', component: ProduitComponent },
  { path: 'detail-produit/:Id', component: DetailProduitComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: '', component: ProduitsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
