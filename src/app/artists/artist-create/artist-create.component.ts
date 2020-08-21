import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  private artistId: string;
  artist: Artist; 

  constructor(public artistService: ArtistService, public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      birthdate: new FormControl(null, { validators: [Validators.required] }),
      deathDate: new FormControl(null, { validators: [Validators.required] }),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('artistId')) {
        this.mode = 'edit';
        this.artistId = paramMap.get('artistId');
        this.isLoading = true;
        console.log('ID', this.artistId)
        this.artistService.getArtist(this.artistId).subscribe(albumData => {
          this.isLoading = false;
          this.artist = {
            id: albumData.id,
            name: albumData.name,
            photoUrl: albumData.photoUrl,
            birthdate: albumData.birthdate,
            deathDate: albumData.deathDate
          };
          this.form.setValue({
            name: this.artist.name,
            birthdate: this.artist.birthdate,
            deathDate: this.artist.deathDate
          });
        });
      } else {
        this.mode = 'create';
        this.artistId = null;
      }
    });
  }

  onSaveArtist() {
    this.isLoading = true;
    if(this.mode === 'create') {
      this.artistService.addArtist(this.form.value.name, this.form.value.photoUrl, this.form.value.birthdate, this.form.value.deathDate);
    } else {
      this.artistService.updateArtist(this.artistId, this.form.value.name, this.form.value.photoUrl, this.form.value.birthdate, this.form.value.deathDate)
    }
    this.router.navigate(['/']);
    this.form.reset(); 
  } 
}
