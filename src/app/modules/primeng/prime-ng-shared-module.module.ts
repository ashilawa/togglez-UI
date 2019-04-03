import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';

// Collection of PrimeNG Modules
@NgModule({
  declarations: [],
  imports: [
    ButtonModule, CardModule, PanelModule
  ],
  exports: [            
    ButtonModule, CardModule, PanelModule
  ]
})
export class PrimeNgSharedModule { }
