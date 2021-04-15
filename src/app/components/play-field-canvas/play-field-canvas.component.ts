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

  readonly showMessageWindow$: Observable<boolean>;

  constructor(private messageService: MessageService) {
    this.showMessageWindow$ = this.messageService.showMessageWindow$;
  }

  ngOnInit() {
  }

}
