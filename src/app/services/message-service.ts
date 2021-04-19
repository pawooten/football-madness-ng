import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

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
     return 200; // ms
   }

   // The separator string between words in a multi-word message.
   get messageWordSeparator(): string {
     return ' ';
   }
}
