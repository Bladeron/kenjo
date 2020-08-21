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
    return this.http.get(BACKEND_URL + 'albums/all');
  }

  getAlbum(albumId: string){
    return this.http.get<{
      _id: string;
      title: string;
      artistId: string;
      coverUrl: string;
      year: number;
      genre: string;
    }>(BACKEND_URL + 'album/' + albumId)
  }

  addAlbum(title: string, artistId:string, coverUrl: string, year, genre: string) {
    console.log(title, year, genre)

    const albumData = {
      title: title,
      artistId: artistId,
      coverUrl: coverUrl,
      year: year,
      genre: genre
    }

    this.http.post(BACKEND_URL + 'album', albumData).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/']);
    });
  }

  deleteAlbum(albumId: string) {
    return this.http.delete(BACKEND_URL + 'album/' + albumId);
  }

  updateAlbum(id: string, title: string, artistId:string, coverUrl: string, year, genre: string){
    
    const albumData = {
      id: id,
      title: title,
      artistId: artistId,
      coverUrl: coverUrl,
      year: year,
      genre: genre
    }

    this.http.put(BACKEND_URL + '/album/' + id, albumData).subscribe(response => {
      this.router.navigate(['/']);
    })
  }
}