import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
