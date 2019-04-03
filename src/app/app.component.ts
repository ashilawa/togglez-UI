import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'togglez-demo';
  list: string[] = [];

  constructor() {
    for (let i = 0; i < 9; i++) {
      this.list.push("item "+i);
      
    }
  }
}
