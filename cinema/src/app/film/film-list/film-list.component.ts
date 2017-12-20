import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from './../film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @Input() films;
  @Output() destroyFilmEvent = new EventEmitter();
  @Output() updateFilmEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  destroy(film: Film){
    // call to server to destroy 
    this.destroyFilmEvent.emit(film);
  }

  update(film: Film){
    // call to server to update 
    this.updateFilmEvent.emit(film);
  }

}
