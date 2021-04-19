import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message-service';
import { Observable } from 'rxjs';
import { DebugService } from '../../services/debug-service';

@Component({
  selector: 'app-play-field-canvas',
  templateUrl: './play-field-canvas.component.html',
  styleUrls: ['./play-field-canvas.component.css']
})
export class PlayFieldCanvasComponent implements OnInit {

  readonly debugMode$: Observable<boolean>;
  readonly showMessageWindow$: Observable<boolean>;

  constructor(private debugService: DebugService, private messageService: MessageService) {
    this.showMessageWindow$ = this.messageService.showMessageWindow$;
    this.debugMode$ = this.debugService.debugMode$;
  }

  ngOnInit() {
  }

}
