import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { ComponentsComponent } from './components/components/components.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerMasComponent } from './components/components/ver-mas/ver-mas.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'games', component: GamesComponent
  },
  {
    path:'components', component: ComponentsComponent
  },
  {
    path:'404', component: NotFoundComponent
  },
  {
    path:'soon', component: ComingSoonComponent
  },
  {
    path:'admin', component: AdministratorComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'ver-mas/:id', component: VerMasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
