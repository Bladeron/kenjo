import { NgModule } from '@angular/core';
import { AlbumComponent } from './album.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports:[
    CommonModule,
    AppRoutingModule
  ],

})

export class AlbumModule { }