import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './albums/album-list/album.component';
import { AlbumCreateComponent } from './albums/album-create/album-create.component';
import { AppComponent } from './app.component';
import { ArtistCreateComponent } from './artists/artist-create/artist-create.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';

const routes: Routes = [
  { path: '', component: AlbumComponent },
  { path: 'albums', component: AlbumComponent },
  { path: 'artist/create', component: ArtistCreateComponent },
  { path: 'artist/list', component: ArtistListComponent },
  { path: 'edit/artist/:artistId', component: ArtistCreateComponent },
  { path: 'create', component: AlbumCreateComponent },
  { path: 'edit/:albumId', component: AlbumCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

