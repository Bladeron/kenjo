import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { filterByAlbum } from '../../utils/filter-function';
import { addName } from '../../utils/addName-function';
import { ArtistService } from 'src/app/artists/artist.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumComponent implements OnInit {
  albums: any = [];
  isLoading = false;
  artistList: any = [];
  enrichedList: any = [];

  private artistId: string;

  constructor(
    public albumService: AlbumService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private artistService: ArtistService
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('artistId')) {
        this.artistId = paramMap.get('artistId');
        this.isLoading = true;

        this.albumService.getAllAlbums().subscribe((albumData: Array<any>) => {
          this.isLoading = false;
          this.enrichedList = addName(albumData, this.artistList);
          this.albums = filterByAlbum(albumData, this.artistId);
        });
      } else {
        this.artistService.getAllArtists().subscribe((artistData) => {
          this.artistList = artistData;

          this.albumService.getAllAlbums().subscribe((albumData: any) => {
            this.isLoading = false;
            this.enrichedList = addName(albumData, this.artistList);
            this.albums = this.enrichedList;
          });
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
