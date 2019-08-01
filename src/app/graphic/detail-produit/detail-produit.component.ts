import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Model/article';


@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
article: Article;
  constructor() { }

  ngOnInit() {
   
  }

}
