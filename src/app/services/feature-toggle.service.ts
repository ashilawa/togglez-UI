import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 
import { Feature } from '../models/feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {

  httpOptions = {                   
    headers: new HttpHeaders({   
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
  };

  redirectUrl: string; 
  
  constructor(private httpClient: HttpClient) { }

  public getFeatures(): Observable<Feature> {
    const endpointUrl = environment.serverUrl.concat('getAllFeatures');
    return this.httpClient.get<any>(endpointUrl, this.httpOptions);
  }
  
}
