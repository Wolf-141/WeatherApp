import { Component } from '@angular/core';
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import { geocity } from '../model/geocity';


@Component({
  selector: 'app-home',
  imports: [Navbar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  SearchCity(search: geocity){
    console.log(search);
  }
}
