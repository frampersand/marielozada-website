import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';

import {
	WpApiModule,
	WpApiLoader,
	WpApiStaticLoader
  } from 'wp-api-angular';

import { InicioComponent } from './components/inicio/inicio.component';
import { NotasComponent } from './components/notas/notas.component';
import { ReportajesComponent } from './components/reportajes/reportajes.component';
import { ReportajeComponent } from './components/reportaje/reportaje.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { NewsletterListComponent } from './components/newsletter-list/newsletter-list.component';
import { NewsletterSubscribeComponent } from './components/newsletter-subscribe/newsletter-subscribe.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NotasComponent,
    ReportajesComponent,
    ReportajeComponent,
    BlogListComponent,
    BlogPostComponent,
    LoaderComponent,
    NewsletterComponent,
    NewsletterListComponent,
    NewsletterSubscribeComponent,
  ],
  imports: [
    BrowserModule,
  	HttpClientModule,
  	APP_ROUTING,
  	WpApiModule.forRoot({
  		provide: WpApiLoader,
  		useFactory: (WpApiLoaderFactory),
  		deps: [Http]
  	  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function WpApiLoaderFactory(http: Http) {
  //return new WpApiStaticLoader(http, 'https://marielozada.cf/wp/wp-json/wp/v2/', '');
  return new WpApiStaticLoader(http, 'http://wp.marielozada.com/wp-json/wp/v2/', '');
  }