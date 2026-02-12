import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { search } from '../../model/search';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  onSearchCity = output<search>();

  searchtext: string = '';

  timezone = signal<string>(Intl.DateTimeFormat().resolvedOptions().timeZone);

  temp_unit = signal<string>('celsius');

  toggleTempUnit() {
    if(this.temp_unit() === 'celsius'){
      this.temp_unit.set('fahrenheit');
    }
    else{
      this.temp_unit.set('celsius');
    }
  }

  toggleTimezone() {
    if(this.timezone() === 'auto'){
      this.timezone.set(Intl.DateTimeFormat().resolvedOptions().timeZone);
    }
    else{
      this.timezone.set('auto');
    }
  }

  onSearch(){
    if(this.searchtext.length < 2){
      alert("prima di inviare bisogna inserire una città nella search box!");
      return;
    }

    const NewSearch = {
      name: this.searchtext,
      temp_unit: this.temp_unit(),

      //@todo - questi due devono essere implementati nella web app
      language: 'it',
      timezone: this.timezone()
    }

    this.onSearchCity.emit(NewSearch);

    this.searchtext = '';
  }
}
