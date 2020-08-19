import { Component, OnInit } from "@angular/core";
import { AlbumService } from "./album.service";

@Component({
  selector: 'app-album-list',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

  constructor(public albumService: AlbumService ) { }

  ngOnInit() {}

  getAll() {
    console.log('component')
    return this.albumService.getAllAlbums().subscribe(data => console.log(data))
  }
}