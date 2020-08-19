import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Album } from '../albums/album.model';

const BACKEND_URL = environment.apiURL;


@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(private http: HttpClient, private router: Router) {

  }

  getAllAlbums() {
    console.log('service getAllAlbums')
    return this.http.get(BACKEND_URL + 'albums/all');
  }

  addAlbum(title: string, year, genre: string) {
    console.log(title, year, genre)

    const albumData = {
      title: title,
      year: year,
      genre: genre
    }

    this.http.post(BACKEND_URL + 'album', albumData).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/']);
    });
  }
}