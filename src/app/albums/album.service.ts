import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiURL + '/albums/';


@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(private http: HttpClient, private router: Router) {

  }

  getAllAlbums() {
    return this.http.get(BACKEND_URL + 'all');
  }
}