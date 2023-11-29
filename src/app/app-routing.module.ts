import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [{
  path: 'home',
  //dit is een route configuration object path is een property en home het woord die we gebruiken in de URL
  component: HomeComponent
  //hier zeg je welk component je eraan koppelt
},
{
  path: '', redirectTo: 'home', pathMatch: 'full'
  //als path een lege string is dan redirect hij naar homePath
},
  {path: 'cart',
  component: CartComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
