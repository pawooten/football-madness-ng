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
private readonly loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
  ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
  ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
  ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
  ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
  ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
  ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
  ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
  ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
  ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
  ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
  ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
  ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
  ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
  ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
  ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
  ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
  ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
  ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
  ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
  ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  private index = 0;

  constructor(private messageService: MessageService) {
    // const interval = setInterval(() => {
    //   this.messageService.send(this.introduction[this.index]);
    //   this.index += 1;
    //   if (this.index === this.introduction.length) {
    //     clearInterval(interval);
    //   }
    // }, 200);
    this.messageService.send(this.loremIpsum);
  }
}
