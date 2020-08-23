import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModule } from './albums/album.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module'; 
import { ArtistModule } from './artists/artist.module';
import { ErrorComponent } from '../app/error/error.component'; 
import { ErrorInterceptor } from '../app/error-interceptor'; 
import { HeaderComponent } from '../app/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlbumModule,
    ArtistModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
