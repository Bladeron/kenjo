import { Component, OnInit } from "@angular/core";
import { AlbumService } from "../album.service";
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

  albums: any = [];
  isLoading = false;

  constructor(public albumService: AlbumService, public router: Router ) { }

  ngOnInit() {
    this.isLoading = true;
    this.albumService
      .getAllAlbums()
      .subscribe((albumData) => {
        console.log('Albumdata en album component ts', albumData)
        this.isLoading = false;
        this.albums = albumData;
    });
  }

  getAll() {
    console.log('component')
    return this.albumService.getAllAlbums().subscribe(data => console.log(data))
  }

  onDelete(albumId: string){
    this.isLoading = true;
    this.albumService.deleteAlbum(albumId).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/']); 
    });
  }

}