import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/Model/article';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from  '@angular/forms';
import { ArticleRepositoryService } from 'src/app/services/article-repository.service';

@Component({
  selector: 'app-controleur',
  templateUrl: './controleur.component.html',
  styleUrls: ['./controleur.component.css']
})
export class ControleurComponent implements OnInit {
  
  public _article: Article;
  public passePlat: Article;

  @Input() set article(value: Article) {
    this._article = value;

  };


  constructor(private _articleRepo: ArticleRepositoryService) { }

  ngOnInit() {
  }

}
