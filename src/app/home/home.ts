import { Component, inject } from '@angular/core';
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import { search } from '../model/search';
import { Weather } from '../services/weather';
import { catchError } from 'rxjs';
import { geocity } from '../model/geocity';
import { weatherinfo } from '../model/weatherinfo';


@Component({
  selector: 'app-home',
  imports: [Navbar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {

  weatherService = inject(Weather);

  city: geocity | undefined;
  weatherInfo: weatherinfo | undefined;

  SearchCity(search: search){
    this.weatherService
    .getCity(search)
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((city) => {
      this.city = city;
      console.log('geocity:', city);
      
      this.weatherService
        .getWeatherInfo(search, city)
        .pipe(
          catchError((err) => {
            console.log(err);
            throw err;
          })
        )
        .subscribe((info) => {
          this.weatherInfo = info;
          console.log('weatherInfo:', info);
        });
    });
  }
}
