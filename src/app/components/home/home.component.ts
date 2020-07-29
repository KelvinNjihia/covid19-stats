import { AllStats } from './../../models/allStats.models';
import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'covid19-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bgColor: string = 'lightblue';
  allStats: AllStats;

  constructor(
    private statsService: StatsService
  ) { }

  ngOnInit(): void {
    this.statsService.getAllStats().subscribe(allStats => {
      this.allStats = allStats;
      console.log(allStats);
    });

  }

}
