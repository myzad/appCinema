import { Component, OnInit } from '@angular/core';
import { FilmService } from './../film.service';
import { Film } from './../film';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  films: Array<Film> = [];

  constructor(
    private filmService: FilmService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
   this.getFilms();
  }

  getFilms(){
    this.filmService.getFilms()
    .then(films => this.films = films)
    .catch(err => console.log(err));
  }

}
