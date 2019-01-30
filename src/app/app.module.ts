import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BoardgamesComponent } from './boardgames/boardgames.component';
import { BgDetailsComponent } from './boardgames/bg-details/bg-details.component';
import { BgInfoComponent } from './boardgames/bg-info/bg-info.component';
import { CatanComponent } from './boardgames/games/catan/catan.component';
import { CluedoComponent } from './boardgames/games/cluedo/cluedo.component';
import { CatanSummaryComponent } from './boardgames/games/catan/catan-summary/catan-summary.component';
import { CatanComponentsComponent } from './boardgames/games/catan/catan-components/catan-components.component';
import { CatanSetupComponent } from './boardgames/games/catan/catan-setup/catan-setup.component';
import { CatanSimulationComponent } from './boardgames/games/catan/catan-simulation/catan-simulation.component';
import { CatanVictoryComponent } from './boardgames/games/catan/catan-victory/catan-victory.component';

const appRoutes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'boardgames', component: BoardgamesComponent },
  { path: 'boardgame/:id' , component: BgDetailsComponent },
  { path: 'contactme', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    BoardgamesComponent,
    BgDetailsComponent,
    BgInfoComponent,
    CatanComponent,
    CluedoComponent,
    CatanSummaryComponent,
    CatanComponentsComponent,
    CatanSetupComponent,
    CatanSimulationComponent,
    CatanVictoryComponent
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
