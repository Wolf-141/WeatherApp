import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { geocity } from '../model/geocity';
import { weatherinfo } from '../model/weatherinfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  http = inject(HttpClient);

  geoApiUrl = "https://geocoding-api.open-meteo.com/v1/search";

  weatherApiUrl = "https://api.open-meteo.com/v1/forecast";

  getWeatherInfo(city: geocity): Observable<weatherinfo>{
    return this.http.get<weatherinfo>(this.weatherApiUrl);
  }

  getCity(): Observable<geocity>{
    return this.http.get<geocity>(this.geoApiUrl);
  }
}
