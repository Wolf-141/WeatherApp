import { Component, inject, signal } from '@angular/core';
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import { search } from '../model/search';
import { Weather } from '../services/weather';
import { catchError, map, of, switchMap } from 'rxjs';
import { geocity } from '../model/geocity';
import { weatherinfo } from '../model/weatherinfo';
import { Info } from "../components/info/info";


@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, Info],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {

  weatherService = inject(Weather);

  searchToggle = signal<boolean>(false);

  city = signal<geocity | null>(null);
  weatherInfo = signal<weatherinfo | null>(null);

  SearchCity(search: search) {
    this.weatherService.getCity(search).pipe(
      catchError(err => {
        console.log(err); 
        return of(null);
      }),
      switchMap(city => {
        this.city.set(city);
        //console.log(`citta' = ${this.city()?.generationtime_ms}`);

        if (!city) return of(null); 

        return this.weatherService.getWeatherInfo(search, city).pipe(
          catchError(err => {
            console.log(err); 
            return of(null); 
          }) 
        );
      }) 
    ) 
    .subscribe(info => {
      this.weatherInfo.set(info);
      //console.log(`meteo = ${this.weatherInfo()?.generationtime_ms}`);
      
      this.searchToggle.set(true);
    });
  }
}
