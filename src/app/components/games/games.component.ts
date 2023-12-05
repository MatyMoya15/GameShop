import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  games: any [] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getGames().subscribe(data => {
      this.games = data;
    });
  }

}
