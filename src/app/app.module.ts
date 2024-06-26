import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BannerComponent } from "./components/banner/banner.component";
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { CarrerComponent } from "./components/carrer/carrer.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CUSTOM_ELEMENTS_SCHEMA,} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { RouterModule, Routes } from '@angular/router';

// @ts-ignore
import { TranslateModule } from "@ngx-translate/core";

import { AppComponent } from './app.component';
register();

const routes: Routes = [
  { path: '', redirectTo: '/pt', pathMatch: 'full' },
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    BannerComponent,
    PortfolioComponent,
    CarrerComponent,
    SkillsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Adicione isso
    TranslateModule.forRoot() // se você estiver usando ngx-translate
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
