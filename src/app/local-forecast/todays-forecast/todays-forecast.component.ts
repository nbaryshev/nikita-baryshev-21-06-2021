import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todays-forecast',
  templateUrl: './todays-forecast.component.html',
  styleUrls: ['./todays-forecast.component.scss']
})
export class TodaysForecastComponent implements OnInit {

  @Input() city: any;
  @Input() todaysForecast: any;
  @Input() dailyForecast: any;
  inFavorites: boolean = false;

  faHeart = faHeart;
  fasHeart = fasHeart;

  constructor() { }

  get temperature() {
    return this.todaysForecast.Temperature.Metric.Value;
  }

  get conditions() {
    return this.todaysForecast.WeatherText;
  }

  get iconCode() {
    return this.todaysForecast.WeatherIcon;
  }

  get windSpeed() {
    return this.todaysForecast.Wind.Speed.Metric.Value;
  }

  get humidity() {
    return this.todaysForecast.RelativeHumidity;
  }

  ngOnInit(): void {
  }

  getFavIcon() {
    return this.inFavorites ? this.fasHeart : this.faHeart;
  }

  getButtonText() {
    return this.inFavorites ? "Added to Favorites" : "Add to Favorites"
  }

  changeFavoritesStatus() {
    this.inFavorites = !this.inFavorites;
  }
}
