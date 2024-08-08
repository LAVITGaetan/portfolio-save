import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { HeroComponent } from './elements/hero/hero.component';
import { TechnoComponent } from './elements/techno/techno.component';
import { ProjectListComponent } from './elements/project-list/project-list.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './elements/menu/menu.component';
import { FooterComponent } from './elements/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    TechnoComponent,
    ProjectListComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
