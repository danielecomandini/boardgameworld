import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BoardgamesComponent } from './boardgames/boardgames.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'boardgames', component: BoardgamesComponent },
  { path: 'contactme', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HeaderComponent,
    HomeComponent,
    BoardgamesComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes, { enableTracing: true } ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
