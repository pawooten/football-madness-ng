import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayeFieldCanvasComponent } from './playe-field-canvas/playe-field-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayeFieldCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
