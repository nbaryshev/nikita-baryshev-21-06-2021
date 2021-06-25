import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataFetchService {

  constructor(private http: HttpClient) { }

  fetchAutoCompleteResults(city) {
    const link = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete'
    return this.http.get(link, {
      params: {
        apikey: environment.apikey,
        q: city,
        language: 'en-us'
      }
    })
  }
  
  getCityForecast(id) {
    const link = `https://dataservice.accuweather.com/currentconditions/v1/${id}`
    return this.http.get(link, {
      params: {
        apikey: environment.apikey,
        language: 'en-us',
        details: "true"
      }
    })
  }

  getWeeklyForecast(id) {
    const link = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}`
    return this.http.get(link, {
      params: {
        apikey: environment.apikey,
        language: 'en-us',
        details: 'true',
        metric: 'true'
      }
    })
  }
}