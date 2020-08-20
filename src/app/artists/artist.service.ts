import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Artist } from './artist.model';

const BACKEND_URL = environment.apiURL;

@Injectable({ providedIn: 'root' })
export class ArtistService {
  constructor(private http: HttpClient, private router: Router) {}

  getAllArtists() {
    return this.http.get(BACKEND_URL + 'artists/all');
  }

  getArtist(artistId: string) {
    return this.http.get<{
      _id: string;
      title: string;
      artistId: string;
      coverUrl: string;
      year: number;
      genre: string;
    }>(BACKEND_URL + 'artist/' + artistId);
  }

  addAlbum(title: string, year, genre: string) {
    console.log(title, year, genre);

    const albumData = {
      title: title,
      year: year,
      genre: genre,
    };

    this.http.post(BACKEND_URL + 'album', albumData).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/']);
    });
  }

  deleteAlbum(albumId: string) {
    return this.http.delete(BACKEND_URL + 'album/' + albumId);
  }

  updateAlbum(id: string, title: string, year, genre: string) {
    const albumData = {
      id: id,
      title: title,
      year: year,
      genre: genre,
    };

    this.http
      .put(BACKEND_URL + '/album/' + id, albumData)
      .subscribe((response) => {
        this.router.navigate(['/']);
      });
  }
}
