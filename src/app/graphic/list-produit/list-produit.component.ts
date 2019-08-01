import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Article } from 'src/app/Model/article';
import { ArticleRepositoryService } from 'src/app/services/article-repository.service';

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


article: Article;
articles: Article[];

  constructor( private _articleRepo: ArticleRepositoryService) { }

  ngOnInit() {
this.articles = this._articleRepo.getArticles();

  }

}
