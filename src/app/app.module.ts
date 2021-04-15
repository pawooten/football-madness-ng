import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayFieldCanvasComponent } from './components/play-field-canvas/play-field-canvas.component';
import { MessageWindowComponent } from './components/message-window/message-window.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayFieldCanvasComponent,
    MessageWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
