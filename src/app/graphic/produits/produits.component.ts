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

  public article: Article;
  public selectedArticle:Article;
  public produit: Article[];
  public enEdition: boolean = false;
  public isAffectingValues: boolean = false;
  public Idcounter:number=3;
 
 

 

  constructor(private _articleRepo: ArticleRepositoryService) { }

  ngOnInit() {
    
    this.produit = this._articleRepo.getArticles();
    this.articleSelectionner(this.produit[0]);

  }
  onSubmit() {
  

  }

  articleSelectionner(a: Article) {
   if (!this.enEdition){
    this.selectedArticle=a;
  }}
  

  
  
ajouter (data: Article){
  this.article.setId(this.Idcounter,data);
  this.produit.push(this.article);
  this.Idcounter++;
 
}
update (data){
  this.enEdition=data;
}
}
