import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-play-field-canvas',
  templateUrl: './play-field-canvas.component.html',
  styleUrls: ['./play-field-canvas.component.css']
})
export class PlayFieldCanvasComponent implements OnInit {

  private showMessageWindowSubject = new BehaviorSubject<boolean>(false);

  readonly showMessageWindow$ = this.showMessageWindowSubject.asObservable();

  private tick = 0;

  constructor(private messageService: MessageService) {
    const interval = setInterval(() => {
      this.tick += 1;
      console.log(this.tick);
      const showWindow = this.tick % 2 == 0;
      this.showMessageWindowSubject.next(showWindow);
      if (this.tick > 6) {
        clearInterval(interval);
      }
    }, 1000);
  }

  ngOnInit() {
  }

}
