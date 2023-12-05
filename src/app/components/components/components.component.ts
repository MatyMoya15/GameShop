import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {

  products: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data =>{
      this.products = data
    })
  }
}
