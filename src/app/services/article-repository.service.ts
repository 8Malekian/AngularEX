import { Injectable } from '@angular/core';
import { Article } from '../Model/article';
import { of } from 'rxjs';
import {tap,map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',

})
export class ArticleRepositoryService {
  private produit = [
    new Article({
      Id: 1,
      Nom: 'papier à dessin blanc',
      Texture: 'a grain',
      Grammage: 224,
      Couleur: 'blanc',
    }),
    new Article({
      Id: 2,
      Nom: 'papier à dessin couleur',
      Texture: 'lisse',
      Grammage: 160,
      Couleur: 'mi-teintes vive',
    })];

  constructor() { }

  public getArticles() {
    return of (this.produit);
  }
  public ajouter(a: Article) {
    var nouveau = new Article;
    nouveau.setValue(a);
    nouveau.setId(this.getIdMax() + 1);
    this.produit.push(nouveau);
    return nouveau;
  }

  modifier(a: Article) {
    var index = this.getIndex(a);
    this.produit[index] = a;
  }

  public getIdMax() {
    var id = -1;
    this.produit.forEach(b => {
      if (b.Id > id)
        id = b.Id;
    });
    return id;
  }
  public getIndex(a: Article) {
    return this.produit.findIndex (b =>{
     return  b.Id === a.Id; 
          
    });
    
  }
  public getById(Id:number){
    return this.getArticles().pipe(
      map((a)=>{return a.find(a=>a.Id===Id);
      }));
    }
  
  
}
