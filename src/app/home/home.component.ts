import { Component, OnInit } from '@angular/core';
import { FeatureToggleService } from '../services/feature-toggle.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: string[] = [];

  constructor(featureToggleService: FeatureToggleService) {
    for (let i = 0; i < 9; i++) {
      this.list.push("item "+i);
      
    }
  }

  ngOnInit() {
  }

}
