import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private backendUrl = 'https://server-gameshop.onrender.com';

  constructor(private http: HttpClient) {}

  getGames(): Observable<any[]> {
    const url = `${this.backendUrl}/api/juegos`;
    return this.http.get<any[]>(url);
  }

  addGame(newGame: any): Observable<any> {
    const url = `${this.backendUrl}/api/juegos`;
  
    // Imprime la URL y los datos antes de la solicitud
    console.log('URL:', url);
    console.log('Request Data:', newGame);
  
    return this.http.post(url, newGame);
  }
  

  updateGame(gameId: string, updatedGame: any): Observable<any> {
    if (!gameId) {
      // Manejar el caso en que gameId es undefined
      return of(null); // Puedes devolver un observable con un valor nulo o manejarlo de otra manera
    }
    const url = `${this.backendUrl}/api/juegos/${gameId}`;
    return this.http.put(url, updatedGame);
  }
  
  getGameById(gameId: string): Observable<any> {
    const url = `${this.backendUrl}/api/juegos/${gameId}`;
    return this.http.get<any>(url);
  }
  
  deleteGame(gameId: string): Observable<any> {
    console.log('Deleting game with ID:', gameId);
    if (!gameId) {
      console.error('Invalid game ID');
      return of(null);
    }
    const url = `${this.backendUrl}/api/juegos/${gameId}`;
    return this.http.delete(url);
  }

  addProduct(newProduct: any): Observable<any> {
    const url = `${this.backendUrl}/api/productos`;
  
    // Imprime la URL y los datos antes de la solicitud
    console.log('URL:', url);
    console.log('Request Data:', newProduct);
  
    return this.http.post(url, newProduct);
  }
  

  getProducts(): Observable<any[]> {
    const url = `${this.backendUrl}/api/productos`;
    return this.http.get<any[]>(url);
  }

  deleteProduct(productId: string): Observable<any> {
    console.log('Deleting product with ID:', productId);
    if (!productId) {
      console.error('Invalid product ID');
      return of(null);
    }
    const url = `${this.backendUrl}/api/productos/${productId}`;
    return this.http.delete(url);
  }

  getProductById(productId: string): Observable<any> {
    const url = `${this.backendUrl}/api/productos/${productId}`;
    return this.http.get<any>(url);
  }
}
