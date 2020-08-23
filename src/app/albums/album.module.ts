import { NgModule } from '@angular/core';
import { AlbumComponent } from './album-list/album-list.component';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlbumComponent, AlbumCreateComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
})
export class AlbumModule {}
