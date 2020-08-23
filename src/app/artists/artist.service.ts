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
      id: string;
      name: string;
      photoUrl: string;
      birthdate: Date;
      deathDate: Date;
    }>(BACKEND_URL + 'artist/' + artistId);
  }

  addArtist(name: string, photoUrl: string, birthdate: Date, deathDate: Date) {

    const artistData = {
      name: name,
      photoUrl: photoUrl,
      birthdate: birthdate,
      deathDate: deathDate
    };

    this.http.post(BACKEND_URL + 'artist', artistData).subscribe((response) => {
      this.router.navigate(['/']);
    });
  }

  deleteArtist(artistId: string) {
    return this.http.delete(BACKEND_URL + 'artist/' + artistId);
  }

  updateArtist(id: string, name: string, photoUrl: string, birthdate: Date, deathDate: Date) {
    const artistData = {
      id: id,
      name: name,
      photoUrl: photoUrl,
      birthdate: birthdate,
      deathDate: deathDate
    };

    this.http
      .put(BACKEND_URL + '/artist/' + id, artistData)
      .subscribe((response) => {
        this.router.navigate(['/']);
      });
  }
}
