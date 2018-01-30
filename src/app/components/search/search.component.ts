import { Component, OnInit } from '@angular/core';
import { MoviesService  } from '../../services/movies.services';
import { Subject } from 'rxjs/Subject';


import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // clubs: any[];
  movies;
  startAt: BehaviorSubject<string|null> = new BehaviorSubject('');
  endAt: BehaviorSubject<string|null> = new BehaviorSubject('\uf8ff');
  constructor(private moviesSvc: MoviesService) { }

  ngOnInit() {
    this.moviesSvc.getMovies(this.startAt, this.endAt)
    .subscribe(movies => this.movies = movies);
  }
  search($event) {
    const q = $event.target.value;
    this.startAt.next(q);
    this.endAt.next(q + '\uf8ff');
}

}
