// En tu ver-mas.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/servicios/products.service';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent implements OnInit {

  productId!: string; // Agrega el signo de exclamación para indicar que será inicializado en el constructor
  product: any;
  products: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute, public productService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productService.getProductById(this.productId).subscribe(data => {
        this.product = data;
      });
    });
  }

  goBack(): void {
    this.router.navigate(['components']);
  }
}
