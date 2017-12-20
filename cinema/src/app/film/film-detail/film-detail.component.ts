import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from './../film.service';
import { Film } from './../film';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  
  film: Film;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.filmService.getFilm(params['id']))
    .subscribe(film => this.film = film);
  }

}
