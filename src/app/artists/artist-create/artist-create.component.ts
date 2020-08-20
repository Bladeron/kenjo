import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.css'],
})
export class ArtistCreateComponent implements OnInit {
  isLoading = false;
  form: FormGroup;
  private mode = 'create';
  private albumId: string;
  //album: Album; 

  constructor(public artistService: ArtistService, public route: ActivatedRoute) {}

  ngOnInit() {
    /* this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      year: new FormControl(null, { validators: [Validators.required] }),
      genre: new FormControl(null, { validators: [Validators.required] }),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('albumId')) {
        this.mode = 'edit';
        this.albumId = paramMap.get('albumId');
        this.isLoading = true;
        console.log('ID', this.albumId)
        this.albumService.getAlbum(this.albumId).subscribe(albumData => {
          this.isLoading = false;
          this.album = {
            _id: albumData._id,
            title: albumData.title,
            artistId: albumData.artistId,
            coverUrl: albumData.coverUrl,
            year: albumData.year,
            genre: albumData.genre,
          };
          this.form.setValue({
            title: this.album.title,
            year: this.album.year,
            genre: this.album.genre
          });
        });
      } else {
        this.mode = 'create';
        this.albumId = null;
      }
    });
  }

  onSaveAlbum() {
    this.isLoading = true;
    if(this.mode === 'create') {
      this.albumService.addAlbum(this.form.value.title, this.form.value.year, this.form.value.genre);
    } else {
      this.albumService.updateAlbum(this.albumId, this.form.value.title, this.form.value.year, this.form.value.genre)
    }
    this.form.reset(); */
  } 
}
