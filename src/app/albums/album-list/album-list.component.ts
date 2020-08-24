import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { filterByAlbum } from '../../utils/filter-function';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumComponent implements OnInit {
  albums: any = [];
  isLoading = false;
  private artistId: string;

  constructor(
    public albumService: AlbumService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('artistId')) {
        this.artistId = paramMap.get('artistId');
        this.isLoading = true;

        this.albumService.getAllAlbums().subscribe((albumData: Array<any>) => {
          console.log(albumData);
          this.isLoading = false;
          this.albums = filterByAlbum(albumData, this.artistId);
        });
      } else {
        this.albumService.getAllAlbums().subscribe((albumData) => {
          console.log(albumData);
          this.isLoading = false;
          this.albums = albumData;
        });
      }
    });
  }

  onDelete(albumId: string) {
    this.isLoading = true;
    this.albumService.deleteAlbum(albumId).subscribe(() => {
      this.albumService.getAllAlbums().subscribe((albumsData) => {
        this.albums = albumsData;
      });
      this.isLoading = false;
    });
  }
}
