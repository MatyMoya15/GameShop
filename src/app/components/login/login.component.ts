import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage = '';

  constructor(public authService: AuthService, private router: Router) {}

  async login() {
    try {
        // Validar que se haya ingresado un correo electrónico y una contraseña
        if (!this.email.trim() || !this.password.trim()) {
            this.errorMessage = 'Correo electrónico y contraseña son obligatorios.';
            return;
        }

        this.authService.isAuthenticating = true;
        await this.authService.login(this.email, this.password);
        this.router.navigate(['']);
    } catch (error) {
        console.error('Error en el componente de inicio de sesión:', error);
        this.errorMessage = 'Inicio de sesión fallido. Verifique sus credenciales.';
    } finally {
        this.authService.isAuthenticating = false;
    }
}

  
}
