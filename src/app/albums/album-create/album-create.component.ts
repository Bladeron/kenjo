import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css'],
})
export class AlbumCreateComponent implements OnInit {
  isLoading = false;
  form: FormGroup;

  constructor(public albumService: AlbumService) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      year: new FormControl(null, { validators: [Validators.required] }),
      genre: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  onSaveAlbum() {
    this.isLoading = true;

    console.log('create component');
    console.log('FORM', this.form.value)
    this.albumService.addAlbum(
      this.form.value.title,
      this.form.value.year,
      this.form.value.genre
    );
    this.form.reset();
  }
}
