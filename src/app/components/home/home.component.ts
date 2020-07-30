import { AllStats } from './../../models/allStats.models';
import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'covid19-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bgColor: string = 'lightblue';
  allStats$: Observable<Array<AllStats>>;

  constructor(
    private statsService: StatsService
  ) { }

  ngOnInit(): void {
    // this.statsService.getAllStats().subscribe(data => {
    //   this.allStats = data;
    //   console.log(data);
    // });

    this.allStats$ = this.statsService.allStats;

  }

}
