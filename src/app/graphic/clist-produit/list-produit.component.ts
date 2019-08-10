import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Article } from 'src/app/Model/article';
import { ArticleRepositoryService } from 'src/app/services/article-repository.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {


  /*public produitForm = new FormGroup({
    Id: new FormControl(''),
    Nom: new FormControl(''),
    Texture: new FormControl(''),
    Grammage: new FormControl(''),
    Couleur: new FormControl(''),
  });


  article: Article;
  articles: Article[];
  enEdition=false;*/
  

  constructor(private _articleRepo: ArticleRepositoryService) { }
 
 ngOnInit() {
   /* this.articles = this._articleRepo.getArticles();
    //this.articleSelectionner(this.articles[0]);
    
  }
  onSubmit() {
    this.article.setValue(this.produitForm.value);
  }
  /*articleSelectionner (a:Article){
    if (!this.enEdition){
      this.article=a;
    }*/
  }

}
