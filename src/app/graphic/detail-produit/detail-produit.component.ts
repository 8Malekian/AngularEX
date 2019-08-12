import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/Model/article';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
    this.articleSelectionner(this._article);
  }

  @Output() ajouterProduit = new EventEmitter<Article>();
  @Output() update = new EventEmitter<boolean>();
  @Output() modifierProduit = new EventEmitter<Article>();

  public produitForm = new FormGroup({
    Id: new FormControl(''),
    Nom: new FormControl('', Validators.required),
    Texture: new FormControl('', Validators.required),
    Grammage: new FormControl('', Validators.required),
    Couleur: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
    this.produitForm.valueChanges.subscribe((d) => {
      if (!this.isAffectingValues) {
        this.setEdition(true);
      }
    });
  }

  onSubmit() {
    this._article.setValue(this.produitForm.value);
    this.modifierProduit.emit(this._article);
    this.setEdition(false);
  }

  annuler() {
    this.articleSelectionner(this.article);
    this.setEdition(false);
  }

  onClicAjouter() {
    this.setEdition(false);
    this.ajouterProduit.emit(this.produitForm.value);
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
}
