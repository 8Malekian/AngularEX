import { Component, OnInit } from '@angular/core';
import { ArticleRepositoryService } from 'src/app/services/article-repository.service';
import { Article } from 'src/app/Model/article';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  public article: Article;
  public selectedArticle: Article;
  public produit: Article[];
  public enEdition: boolean = false;
  public articleSub: Subscription;
  public produit$: Observable<Article[]>;




  constructor(private _articleRepo: ArticleRepositoryService, private _actRoute: ActivatedRoute, ) { }

  ngOnInit() {

    this.produit$ = this._articleRepo.getArticles();
  }

}
