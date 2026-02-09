import { Component } from '@angular/core';
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import { search } from '../model/search';


@Component({
  selector: 'app-home',
  imports: [Navbar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  SearchCity(search: search){
    console.log(search);
  }
}
