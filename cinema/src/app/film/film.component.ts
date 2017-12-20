import { Component, OnInit } from '@angular/core';
import { FilmService } from './film.service';
import { Film } from './film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  films: Array<Film> = [];

  constructor(private _filmService: FilmService) { }

  ngOnInit() {
    this.getFilms();
  }

  create(film: Film){
    this._filmService.create(film)
    .then(status => this.getFilms())
    .catch(err => console.log(err));

    this.films.push(film);
  }

  destroy(film: Film){
    this._filmService.destroy(film)
    .then(status => this.getFilms())
    .catch(err => console.log(err));
  }

  update(film: Film){
    this._filmService.update(film)
    .then(status => this.getFilms())
    .catch(err => console.log(err));
  }

  getFilms(){
    this._filmService.getFilms()
    .then(films => this.films = films)
    .catch(err => console.log(err));
  }

}
