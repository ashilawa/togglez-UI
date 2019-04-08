import { Component, ViewEncapsulation } from '@angular/core';
import { FeatureToggleService } from './services/feature-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'togglez-demo';
  list: string[] = [];

  constructor(featureToggleService: FeatureToggleService) {
    for (let i = 0; i < 9; i++) {
      this.list.push("item "+i);
      
    }


  }
}
