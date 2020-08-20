import { Component, OnInit } from "@angular/core";
import { AlbumService } from "../album.service";
import { Album } from '../album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

  albums: Album[] = [];
  isLoading = false;

  constructor(public albumService: AlbumService ) { }

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
      this.albumService.getAllAlbums();
    }, () => {
      this.isLoading = false;
    });
  }

}