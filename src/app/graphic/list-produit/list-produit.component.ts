import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

produitForm =new FormGroup({

Id:new FormControl(''),
Nom:new FormControl(''),
Texture:new FormControl(''),
Grammage:new FormControl(''),
Couleur:new FormControl(''),
});

  constructor() { }

  ngOnInit() {
  }

}
