import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/Model/article';
import { ArticleRepositoryService } from 'src/app/services/article-repository.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  
  public selectedArticle: Article;
  public produit: Article[];
  public enEdition: boolean = false;
  
  

  constructor(private _articleRepo: ArticleRepositoryService) { }
  
private articlessubscribe;
  ngOnInit() {
this.articlessubscribe= this._articleRepo.getArticles().subscribe((d)=>{
  this.produit = d;
  this.articleSelectionner(this.produit[0]);
});
    
  

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
