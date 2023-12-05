import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  username: string | null = null;
  isAuthenticating = false;

  username$ = this.authService.getUsername();

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Suscribirse a cambios de autenticación
    this.authService.authState.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      if (loggedIn) {
        this.authService.username.subscribe((username) => {
          this.username = username;
        });
      }
    });
  }

  login(email: string, password: string) {
    this.isAuthenticating = true;
    this.authService.login(email, password).subscribe(() => {
      this.router.navigate(['/login']);
    }, (error) => {
      console.error('Error en el componente de inicio de sesión:', error);
      this.isAuthenticating = false;
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
