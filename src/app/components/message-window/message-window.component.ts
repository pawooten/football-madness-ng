import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-message-window',
  templateUrl: './message-window.component.html',
  styleUrls: ['./message-window.component.css']
})
export class MessageWindowComponent implements OnInit {

  readonly message$: Observable<string>;

  constructor(private messageService: MessageService) {
    this.message$ = this.messageService.message$;
  }

  ngOnInit() {
  }

}
