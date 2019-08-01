import { Injectable } from '@angular/core';
import { Article } from '../Model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleRepositoryService {
  private articles = [
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
    return this.articles;
  }
}
