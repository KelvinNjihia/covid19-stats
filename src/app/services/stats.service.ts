import { AllStats, AllStatsResponse } from './../models/allStats.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map, shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const CACHE_SIZE = 1;
@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private cache$: Observable<Array<AllStats>>;

  baseUrl: string = 'https://disease.sh/v3/';

  constructor(private http: HttpClient) { }

  get allStats() {
    if(!this.cache$) {
      this.cache$ = this.requestAllStats().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  private requestAllStats() {
    return this.http.get<AllStatsResponse>(this.baseUrl + 'covid-19/all').pipe(
      map(response => response.value)
    );
  }

}
