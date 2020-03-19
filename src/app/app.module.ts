import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/navbar/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './components/footer/footer-component/footer-component.component';
import { MainContentComponentComponent } from './components/mainContent/main-content-component/main-content-component.component';
import { SideContentComponentComponent } from './components/sideContent/side-content-component/side-content-component.component';
import { HeaderComponentComponent } from './components/header/header-component/header-component.component';
import { EjemploComponentComponent } from './components/ejemplo-component/ejemplo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    MainContentComponentComponent,
    SideContentComponentComponent,
    HeaderComponentComponent,
    EjemploComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
