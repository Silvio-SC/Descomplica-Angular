import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { Home2Component } from './home2.component';
import { FacebookComponent } from './facebook.component';


@NgModule({
  declarations: [HomeComponent, Home2Component, FacebookComponent],
  exports: [HomeComponent, Home2Component, FacebookComponent]
})
export class PagesModule {}
