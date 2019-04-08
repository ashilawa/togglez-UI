import { Pipe, PipeTransform } from '@angular/core';
import { Feature } from '../models/feature';

@Pipe({
  name: 'activeFeatures'
})
export class ActiveFeaturePipe implements PipeTransform {

  transform(features: Feature[]) {
    return features && features.filter((f) => {return f.enabled && f.active});
  }

}
