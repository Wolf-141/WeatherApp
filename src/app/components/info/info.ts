import { Component, input, signal } from '@angular/core';
import { geocity } from '../../model/geocity';
import { weatherinfo } from '../../model/weatherinfo';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-info',
  imports: [DatePipe],
  templateUrl: './info.html',
  styleUrl: './info.scss',
})
export class Info {
  geocity = input.required<geocity>();
  weatherinfo = input.required<weatherinfo>();

  currInfoTime = signal<string>('');

  showMoreInfo(time: string){
    this.currInfoTime.set(time);
  }
}
