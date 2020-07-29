import { AllStats } from './../models/allStats.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map, shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  baseUrl: string = 'https://disease.sh/v3/';
  constructor(
    private http: HttpClient
  ) { }

  getAllStats(): Observable<AllStats> {
      return this.http.get<AllStats>(this.baseUrl + 'covid-19/all')
      // .pipe(tap(result => this.addCache(AllStats, result)));
  }
}
