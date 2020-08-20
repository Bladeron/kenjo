import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { ArtistListomponent } from './artist-list/artist-list.component'; 

@NgModule({
  declarations: [ArtistListomponent, ArtistCreateComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class ArtistModule {}
