import { Component, OnInit } from "@angular/core";
import { ArtistService  } from "../artist.service";
import { Artist } from '../artist.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})

export class ArtistListomponent implements OnInit {

  albums: any = [];
  isLoading = false;

  constructor(public artistService: ArtistService, public router: Router ) { }

  ngOnInit() {
    /*this.isLoading = true;
    this.albumSerartistServicevice
      .getAllAlbums()
      .subscribe((albumData) => {
        console.log('Albumdata en album component ts', albumData)
        this.isLoading = false;
        this.albums = albumData;
    });
  }

  getAll() {
    console.log('component')
    return this.artistService.getAllAlbums().subscribe(data => console.log(data))
  }

  onDelete(albumId: string){
    this.isLoading = true;
    this.artistService.deleteAlbum(albumId).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/']); 
    });*/
  }

}