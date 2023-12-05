import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  products: any[] = [];
  showGames: boolean = true;
  games: any[] = [];

  selectedGame: any;

  newGame = { nombre: '', price: 0, discount: 0, stock: 0, img: '' };
  newProduct = { nombre: '', price: 0, discount: 0, stock: 0, img: '' };

  editingGame= false;

  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.updateProducts();
  }

  toggleView(): void {
    this.showGames = !this.showGames;
    this.updateProducts();
  }

  updateProducts(): void {
    if (this.showGames){
      this.productService.getGames().subscribe(data => {
        this.games = data;
      });
    } else {
      this.productService.getProducts().subscribe(data => {
        this.products = data;
      });
    }
  }

addNewGame(formulario: NgForm): void {
  if (!formulario) {
    console.error('Formulario es undefined');
    return;
  }

  const newGame = {
    nombre: formulario.value.nombre,
    price: formulario.value.price,
    discount: formulario.value.discount,
    stock: formulario.value.stock,
    img: formulario.value.img
  };

  console.log('New Game Data:', newGame);

  this.productService.addGame(newGame).subscribe(() => {
    this.updateProducts();
  });

  formulario.reset();
}

editGameConfirmed(formulario: NgForm): void {
  console.log('Formulario:', formulario.value);
  console.log('Selected Game ID:', this.selectedGame.id);  if (formulario.valid) {
    // Llama a la función de actualización en el servicio
    this.productService.updateGame(this.selectedGame.id, formulario.value).subscribe(() => {
      // Actualiza la lista de productos después de la actualización exitosa
      this.updateProducts();
      // Restablece la variable editingGame a false después de la actualización
      this.editingGame = false;
    });
  } else {
    console.error('Formulario no válido');
  }
}


  deleteGameConfirmed(game: any): void {
    this.productService.deleteGame(game._id).subscribe(() => {
        this.updateProducts();
    });
  }

  deleteProductConfirmed(product: any): void{
    this.productService.deleteProduct(product._id).subscribe(() =>{
      this.updateProducts();
    })
  }

  addNewProduct(formulario: NgForm): void {
    if (!formulario.valid) {
      console.error('Formulario no válido');
      return;
    }
  
    const newProduct = {
      nombre: formulario.value.nombre,
      price: formulario.value.price,
      discount: formulario.value.discount,
      stock: formulario.value.stock,
      img: formulario.value.img
    };
  
    console.log('New Product Data:', newProduct);
  
    this.productService.addProduct(newProduct).subscribe(() => {
      this.updateProducts();
    });
  
    formulario.reset();
  }

  loadGameData(gameId: string): void {
    this.productService.getGameById(gameId).subscribe(data => {
      console.log('Game data received:', data);
      this.selectedGame = { ...data, id: data._id }; // Ajusta esto según la estructura real del objeto
      this.editingGame = true;
    });
  }
  
  
}
