import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSpeed = MessageSpeed.FastForward;

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
