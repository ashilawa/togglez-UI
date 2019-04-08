import { Component, OnInit } from '@angular/core';
import { FeatureToggleService } from '../services/feature-toggle.service';
import { environment } from 'src/environments/environment';
import { Feature } from '../models/feature';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  featureList: Feature[];

  constructor(featureToggleService: FeatureToggleService) {
    featureToggleService.getFeatures().subscribe((features)=>{ 
      console.log(features);
      this.featureList = features;
     });

  }

}
