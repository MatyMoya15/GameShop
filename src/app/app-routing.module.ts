import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { ComponentsComponent } from './components/components/components.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
