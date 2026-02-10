import { Component, input } from '@angular/core';
import { geocity } from '../../model/geocity';
import { weatherinfo } from '../../model/weatherinfo';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.scss',
})
export class Info {
  geocity = input.required<geocity>();
  weatherinfo = input.required<weatherinfo>();
}
