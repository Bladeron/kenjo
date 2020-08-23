import { Component, OnInit } from "@angular/core";
import { ArtistService  } from "../artist.service";
import { Artist } from '../artist.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})

export class ArtistListComponent implements OnInit {

  artists: any = [];
  isLoading = false;

  constructor(public artistService: ArtistService, public router: Router ) { }

  ngOnInit() {
    this.isLoading = true;
    this.artistService
      .getAllArtists()
      .subscribe((artistData) => {
        console.log(artistData)
        this.isLoading = false;
        this.artists = artistData;
    });
  }

  getAll() {
    return this.artistService.getAllArtists().subscribe(data => console.log(data))
  }

  onDelete(albumId: string){
    this.isLoading = true;
    this.artistService.deleteArtist(albumId).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/']); 
    });
  }

  filterByArtist(artistId: string) {
    return  this.artists.filter(function (el) {
      return el.title == artistId
    });

  }

}