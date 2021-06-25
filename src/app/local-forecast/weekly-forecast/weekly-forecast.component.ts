import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weekly-forecast',
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.scss']
})
export class WeeklyForecastComponent implements OnInit {

  @Input() isDailyForecast: boolean;
  @Input() weeklyForecast: any;

  constructor() { }

  ngOnInit(): void {
  }

  getIconId(forecast) {
    return forecast.Day.Icon;
  }

  formateDate(date) {
    date = new Date(date);
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: '2-digit'
    }).format(date)
  }
  
}
