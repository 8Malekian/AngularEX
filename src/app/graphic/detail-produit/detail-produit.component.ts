import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/Model/article';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  public _article: Article;
  public enEdition: boolean = false;
  public isAffectingValues: boolean = false;
  

  get article(){
    return this._article;
  }


  @Input() set article(value: Article) {
    this._article = value;
    this.articleSelectionner(this._article)

  };
  @Output()ajouter=new EventEmitter<Article>();
  
  public produitForm = new FormGroup({
    Id: new FormControl(''),
    Nom: new FormControl(''),
    Texture: new FormControl(''),
    Grammage: new FormControl(''),
    Couleur: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  
    
    
  }
  onSubmit() {
    this.article.setValue(this.produitForm.value);
    this.setEdition(false);
  }
  articleSelectionner(a: Article) {
    this.produitForm.setValue(a);
  }
  //selectProduit(p: Article) {

  //this.isAffectingValues = true;
  //this.produitForm.setValue(p);
  //this.isAffectingValues = false;
  //}
  setEdition(value: boolean) {
    this.enEdition = value;


  }
  annuler() {
    this.articleSelectionner(this.article);
    this.setEdition(false);
  }
}
