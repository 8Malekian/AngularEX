import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/Model/article';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArticleRepositoryService } from 'src/app/services/article-repository.service';


@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  public _article: Article;
  public enEdition: boolean = false;
  public isAffectingValues: boolean = false;
  public articleID: number;
  public add:boolean=true;
  articlesubscribe;

  get article() {
    return this._article;
  }

  @Input() set article(value: Article) {
    this._article = value;
    this.articleSelectionner(this._article);
  }

  @Output() ajout = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<boolean>();
  @Output() modifierProduit = new EventEmitter<Article>();

  public produitForm = new FormGroup({
    Id: new FormControl(''),
    Nom: new FormControl('', Validators.required),
    Texture: new FormControl('', Validators.required),
    Grammage: new FormControl('', Validators.required),
    Couleur: new FormControl('', Validators.required)
  });

  constructor(private _actRoute: ActivatedRoute, private _articleRepo: ArticleRepositoryService) { }

  ngOnInit() {

    this.articleID = +this._actRoute.snapshot.paramMap.get('Id');

    this.articlesubscribe = this._articleRepo.getById(this.articleID).subscribe(
      (d) => {
        this._article = d;
        this.articleSelectionner(this._article);
      });

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
    this.ajouter(this.produitForm.value)
    this.ajout.emit(this.add);

  }

  articleSelectionner(a: Article) {
    if (a != null) {
      this.isAffectingValues = true;
      this.produitForm.setValue(a);
      this.isAffectingValues = false;
    }

  }

  setEdition(value: boolean) {
    this.enEdition = value;
    this.update.emit(this.enEdition);
  }
  ajouter(a: Article) {
    var b: Article;
    b = this._articleRepo.ajouter(a);

  }
}
