import { Injectable } from '@angular/core';
import { Film } from './film';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmService {

  constructor(private _http: Http) { }

  getFilms(){
    return this._http.get("/films")
    .map(data => data.json()).toPromise()
  }

  create(film: Film){
    return this._http.post("/films", film)
    .map(data => data.json()).toPromise()
  }

  destroy(film: Film){
    return this._http.delete("/films/"+film._id)
    .map(data => data.json()).toPromise()
  }

  update(film: Film){
    return this._http.put("/films/"+film._id, film)
    .map(data => data.json()).toPromise()
  }

  getFilm(id: number): Promise<Film> {
    return this.getFilms()
    .then(films => films.find(film => film._id === id));
  }

}
