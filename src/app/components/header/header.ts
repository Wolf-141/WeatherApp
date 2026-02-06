import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
