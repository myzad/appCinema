import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from './../film';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})
export class FilmEditComponent implements OnInit {
  @Input() film: Film;
  @Output() updateFilmEvent = new EventEmitter();
  filmEdit: Film = new Film();

  constructor() { }

  ngOnInit() {
    Object.assign(this.filmEdit, this.film);
  }

  update(){
    this.filmEdit.editable = false;
    this.updateFilmEvent.emit(this.filmEdit);
  }

}
