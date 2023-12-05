import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private usernameSubject = new BehaviorSubject<string>('');
  private _authState = new BehaviorSubject<boolean>(false);
  isAuthenticating = false;

  get authState() {
    return this._authState.asObservable();
  }

  get username() {
    return this.usernameSubject.asObservable();
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<void> {
    this.isAuthenticating = true;

    return this.http.post<any>('http://localhost:4000/api/usuarios/login', { email, password })
      .pipe(
        map(response => {
          const token = response.token;

          // Guardar el token en el almacenamiento local
          localStorage.setItem('token', token);

          // Establecer el estado de autenticación
          this.isAuthenticated = true;
          this.usernameSubject.next('UsuarioEjemplo');
          this._authState.next(true);

          console.log('Inicio de sesión exitoso. Token:', token);
        }),
        catchError(error => {
          console.error('Error en la solicitud de inicio de sesión:', error);
          return throwError('Error en la autenticación');
        }),
        finalize(() => this.isAuthenticating = false)
      );
  }

  logout(): Observable<void> {
    // Lógica de cierre de sesión
    this.isAuthenticated = false;
    this.usernameSubject.next('');
    this._authState.next(false);

    // También deberías eliminar el token almacenado al cerrar sesión
    localStorage.removeItem('token');

    return of();
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }

  get isAuthenticating$(): Observable<boolean> {
    return of(this.isAuthenticating);
  }

  getUsername(): Observable<string> {
    return this.usernameSubject.asObservable();
  }
}
