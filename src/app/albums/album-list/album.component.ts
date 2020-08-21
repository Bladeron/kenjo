import { Component, OnInit } from "@angular/core";
import { AlbumService } from "../album.service";
import { Album } from '../album.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { filterByAlbum } from '../../utils/filter-function';

@Component({
  selector: 'app-album-list',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

  albums: any = [];
  isLoading = false;
  private artistId: string;

  constructor(public albumService: AlbumService, public router: Router, public activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.isLoading = true;

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('artistId')) {
        this.artistId = paramMap.get('artistId');
        this.isLoading = true;

        this.albumService.getAllAlbums().subscribe((albumData: Array<any>) => {
          this.isLoading = false;
          this.albums = filterByAlbum(albumData, this.artistId);
          console.log('ID', this.artistId)
          console.log('ALBUMS', this.albums)
        });
      } else {
        this.albumService.getAllAlbums().subscribe((albumData) => {
          
          this.isLoading = false;
          this.albums = albumData;
        });
      }
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