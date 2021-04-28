import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { MapComponent } from "./map/map.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MapComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
