import { Component } from '@angular/core';
import { MessageService } from './services/message-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'football-madness-ng';

  private readonly introduction = [
    '3',
    '2',
    '1',
    '...',
    'Welcome to the Championship Game Ladies and Gentlemen!',
    '',
    'Please stand for the national anthem'
  ];
  private index = 0;

  constructor(private messageService: MessageService) {
    const interval = setInterval(() => {
      this.messageService.send(this.introduction[this.index]);
      this.index += 1;
      if (this.index === this.introduction.length) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
