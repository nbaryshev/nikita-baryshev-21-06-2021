import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../services/data-fetch.service';
import {FormControl} from '@angular/forms';
// import { Store } from '@ngrx/store';

@Component({
  selector: 'app-local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.scss']
})
export class LocalForecastComponent implements OnInit {

  autoCompleteSearchResults: any;
  cityInput: string = '';
  cityDetails: any = {};
  defaultCityCode = 210841;
  defaultCityName: string = 'Tel-Aviv';
  todaysForecast: any;
  weeklyForecast: any;
  shouldShowResults: boolean = false;
  myControl = new FormControl();

  cities: any;

  constructor(private fetchData: DataFetchService) { }

  ngOnInit(): void {
    this.cityDetails.name = this.defaultCityName;
    this.getCityForecast(this.defaultCityCode);
    this.cities = []
  }

  hasSearchResults() {
    return this.autoCompleteSearchResults?.length > 0
  }

  cityChoice(name, key) {
    this.cityDetails.name = name;
    this.cityDetails.key = key;
  }

  getAutoCompleteResults() {
    this.fetchData.fetchAutoCompleteResults(this.cityInput)
      .subscribe(
        result => { this.autoCompleteSearchResults = result },
        err => console.log(`we have an error: ${err}`)
      )
  }

  getCityForecast(cityCode) {
    this.fetchData.getCityForecast(cityCode)
    .subscribe(
      result => this.todaysForecast = result[0],
      err => console.log(`we have an error: ${err}`)
    );

    this.fetchData.getWeeklyForecast(cityCode)
    .subscribe(
      result => {this.weeklyForecast = result},
      err => console.log(`we have an error: ${err}`)
    );
  }


}