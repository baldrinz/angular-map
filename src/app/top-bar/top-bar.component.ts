import {NgModule} from '@angular/core';
import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatButtonToggleModule,
  ]
})

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

}
