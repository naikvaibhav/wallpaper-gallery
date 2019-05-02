import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


//importing router module for routing the path
import { RouterModule,Routes} from'@angular/router';
import { SpiritualComponent } from './spiritual/spiritual.component';

import {GalleryService} from './gallery.service';
import { ViewspiritualComponent } from './viewspiritual/viewspiritual.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpiritualComponent,
    ViewspiritualComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'spiritual', component:SpiritualComponent},
      {path:'viewspiritual/:url', component:ViewspiritualComponent}
     

    ])
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
