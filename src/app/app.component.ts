import { Component } from '@angular/core';
import { MessageService } from './services/message-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'football-madness-ng';

  constructor(private messageService: MessageService) {
    this.messageService.send('test message');
  }
}
