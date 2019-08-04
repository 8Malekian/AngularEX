import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Article } from 'src/app/Model/article';
import { ArticleRepositoryService } from 'src/app/services/article-repository.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public article: Article;
  public selectedArticle:Article;
  public produit: Article[];
  public articles:Article[];
  public enEdition: boolean = false;
  public isAffectingValues: boolean = false;

  public articleForm = new FormGroup({
    Id: new FormControl(''),
    Nom: new FormControl(''),
    Texture: new FormControl(''),
    Grammage: new FormControl(''),
    Couleur: new FormControl('')
  });




  constructor(private _articleRepo: ArticleRepositoryService) { }

  ngOnInit() {
    
    this.produit = this._articleRepo.getArticles();
    

  }
  onSubmit() {
    this.article.setValue(this.articleForm.value)

  }

  articleSelectionner(a: Article) {
    this.articleForm.setValue(a);
    this.selectedArticle=a;
  }
  //selectProduit(p: Article) {

  //this.isAffectingValues = true;
  //this.produitForm.setValue(p);
  //this.isAffectingValues = false;
  //}
  setEdition(value: boolean) {
    this.enEdition = value;


  }


}
