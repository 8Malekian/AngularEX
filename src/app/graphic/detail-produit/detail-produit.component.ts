import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/Model/article';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  public _article:Article;
  public enEdition:boolean=false;
  public isAffectingValues: boolean=false;

  public produitForm =new FormGroup({
    Id:new FormControl(''),
    Nom:new FormControl(''),
    Texture:new FormControl(''),
    Grammage:new FormControl(''),
    Couleur:new FormControl('')
    });



@Input() set article (value: Article) {// on recupère l'article selectionné dans l'autre componment
  this._article = value;
  this.selectProduit(this._article)
}


  constructor() { }

  ngOnInit() {
    this.selectProduit(this.article);
    this.setEdition(false);
   
  }
  onSubmit() {
    
    this.article.setValue(this.produitForm.value);
    this.setEdition(false);
  }
  selectProduit(p: Article) {
    
    this.isAffectingValues = true;
    this.produitForm.setValue(p);
    this.isAffectingValues = false;
  }
  setEdition (value:boolean){
    this.enEdition =value;

  }
  annuler(){
    this.selectProduit(this.article);
    this.setEdition(false);
  }
}
