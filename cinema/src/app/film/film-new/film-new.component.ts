import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Film } from './../film';
import { FilmService } from './../film.service';

@Component({
  selector: 'app-film-new',
  templateUrl: './film-new.component.html',
  styleUrls: ['./film-new.component.css']
})
export class FilmNewComponent implements OnInit {
  newFilm = new Film();
  @Output() createNewFilmEvent = new EventEmitter();

  constructor(
    private filmService: FilmService 
  ) { }

  ngOnInit() {
  }

  create(){
    //call server to save
    this.createNewFilmEvent.emit(this.newFilm);
    this.newFilm = new Film();
  }

}
