import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSpeed = MessageSpeed.Normal;

  private showMessageWindowSubject = new BehaviorSubject<boolean>(false);
  readonly showMessageWindow$ = this.showMessageWindowSubject.asObservable();

  private messageSubject = new BehaviorSubject<string>('');
  readonly message$ = this.messageSubject.asObservable();

  constructor() {}

  send(message: string): void {
    this.messageSubject.next(message);
    this.showMessageWindowSubject.next(true);
    console.log(`message service: ${message}`);
   }

   sendMessages(messages: string[], delay: number): void {
    if (!messages || messages.length === 0) {
      return;
    }
    let index = 0;
    this.send(messages[index]); // display the first message
    const interval = window.setInterval(() => {
      index += 1;
      if (index === messages.length) {
        window.clearInterval(interval);
        return;
      }
      this.send(messages[index]);
    }, delay);
  }

   // The delay between drawing each word in a multi-word message, in milliseconds.
   get messageWordSpeed(): number {
     return this.messageSpeed;
   }

   // The separator string between words in a multi-word message.
   get messageWordSeparator(): string {
     return ' ';
   }
}
export abstract class MessageSpeed {
  // The delay between drawing each word in a multi-word message while in normal mode, in milliseconds.
  public static readonly Normal = 200;
   // The delay between drawing each word in a multi-word message while in fast forward mode, in milliseconds.
   public static readonly FastForward = 50;
}
