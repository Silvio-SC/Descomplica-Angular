import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { Home2Component } from './pages/home2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/dois', component: Home2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
