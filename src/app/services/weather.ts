import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { geocity } from '../model/geocity';
import { weatherinfo } from '../model/weatherinfo';
import { search } from '../model/search';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  http = inject(HttpClient);

  private geoApiUrl = "https://geocoding-api.open-meteo.com/v1/search";

  private weatherApiUrl = "https://api.open-meteo.com/v1/forecast";

  getWeatherInfo(search: search, geocity: geocity): Observable<weatherinfo>{
    const url = `${this.weatherApiUrl}?latitude=${geocity.results[0].latitude}&longitude=${geocity.results[0].longitude}&elevation=${geocity.results[0].elevation}&timezone=${encodeURIComponent(search.timezone)}&temperature_unit=${encodeURIComponent(search.temp_unit)}&hourly=weather_code&hourly=temperature_2m&hourly=is_day&hourly=precipitation&hourly=precipitation_probability`;

    return this.http.get<weatherinfo>(url);
  }

  getCity(search: search): Observable<geocity>{
    const url = `${this.geoApiUrl}?name=${encodeURIComponent(search.name.trim())}&language=${encodeURIComponent(search.language.toLowerCase())}&count=1&format=json`;

    return this.http.get<geocity>(url);
  }
}