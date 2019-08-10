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


  get article() {
    return this._article;
  }


  @Input() set article(value: Article) {
    this._article = value;
    this.articleSelectionner(this._article)

  };
  @Output() ajouterProduit = new EventEmitter<Article>();
  @Output() update = new EventEmitter<any>();

  public produitForm = new FormGroup({
    Id: new FormControl(''),
    Nom: new FormControl(''),
    Texture: new FormControl(''),
    Grammage: new FormControl(''),
    Couleur: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    //this.articleSelectionner(this.article);
    this.produitForm.valueChanges.subscribe((d) =>{
   if (!this.isAffectingValues) {
      this.enEdition = true;
      this.update.emit(this.enEdition);
    }
    });
  }

  onSubmit() {
    this.article.setValue(this.produitForm.value);
    this.setEdition(false);
    this.update.emit(this.enEdition)
  }

  articleSelectionner(a: Article) {
    this.isAffectingValues = true;
    this.produitForm.setValue(a);
    this.isAffectingValues = false;
  }

  setEdition(value: boolean) {
    this.enEdition = value;
    this.update.emit(this.enEdition);


  }
  onUpdate() {
    this.update.emit(this.produitForm);
  }
  annuler() {
    this.articleSelectionner(this.article);
    this.setEdition(false);
  }

  onClicAjouter() {
    this._article.setValue(this.produitForm.value)
    this.ajouterProduit.emit(this._article);
  }
}
