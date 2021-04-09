import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayFieldCanvasComponent } from './play-field-canvas/play-field-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayFieldCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
