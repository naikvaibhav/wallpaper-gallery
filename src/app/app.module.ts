import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


//importing router module for routing the path
import { RouterModule, Routes } from '@angular/router';
import { SpiritualComponent } from './spiritual/spiritual.component';

import { GalleryService } from './gallery.service';
import { ViewspiritualComponent } from './viewspiritual/viewspiritual.component';

import { NatureComponent } from './nature/nature.component';
import { ViewabstractComponent } from './viewabstract/viewabstract.component';
import { AbstractComponent } from './abstract/abstract.component';
import { ViewnatureComponent } from './viewnature/viewnature.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpiritualComponent,
    ViewspiritualComponent,
    NatureComponent,
    ViewabstractComponent,
    AbstractComponent,
    ViewnatureComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'spiritual', component: SpiritualComponent },
      { path: 'abstract', component: AbstractComponent },
      { path: 'nature', component: NatureComponent },
      { path: 'viewspiritual/:imgId', component: ViewspiritualComponent },
      { path: 'viewabstract/:imgId', component: ViewabstractComponent },
      { path: 'viewnature/:imgId', component: ViewnatureComponent }


    ])
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
