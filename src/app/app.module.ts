import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentsComponent } from './components/components/components.component';
import { GamesComponent } from './components/games/games.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { VerMasComponent } from './components/components/ver-mas/ver-mas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ComponentsComponent,
    GamesComponent,
    NotFoundComponent,
    ComingSoonComponent,
    AdministratorComponent,
    LoginComponent,
    RegisterComponent,
    VerMasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
