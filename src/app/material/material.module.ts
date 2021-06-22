import { NgModule } from '@angular/core';



import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
