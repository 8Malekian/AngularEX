import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/Model/article';
import { ArticleRepositoryService } from 'src/app/services/article-repository.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  title = 'Gestion de produit de Canson et fils';
  public article: Article;
  public selectedArticle: Article;
  public produit: Article[];
  public enEdition: boolean = false;
  public isAffectingValues: boolean = false;
  public Idcounter: number = 1;
  public Idmax: number;
  





  constructor(private _articleRepo: ArticleRepositoryService) { }

  ngOnInit() {

    this.produit = this._articleRepo.getArticles();
    this.articleSelectionner(this.produit[0]);

  }

  articleSelectionner(a: Article) {
    if (!this.enEdition) {
      this.selectedArticle = a;
    }
  }

  ajouter(a: Article) {
    var b: Article;
    b = this._articleRepo.ajouter(a);
    this.articleSelectionner(b);
  }

  update(bEnEdition:boolean) {
    this.enEdition = bEnEdition;
  }

  modifier(a:Article){
   this._articleRepo.modifier(a);
  }

}
