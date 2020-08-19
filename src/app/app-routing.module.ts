import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './albums/album-list/album.component';
import { AlbumCreateComponent } from './albums/album-create/album-create.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'albums', component: AlbumComponent },
  { path: 'create', component: AlbumCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

