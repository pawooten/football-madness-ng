import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message-service';
import { BehaviorSubject, NextObserver, Observable } from 'rxjs';

@Component({
  selector: 'app-message-window',
  templateUrl: './message-window.component.html',
  styleUrls: ['./message-window.component.css']
})
export class MessageWindowComponent implements OnInit {

  readonly message$: Observable<string>;
  private messageSubject = new BehaviorSubject<string>('');
  private words: string[];
  private wordIndex: number;

  private observer: NextObserver<string> = {
    next: (value: string) => {
      this.words = value.split(' ');

      let burstMessage = ''; // This might be a zero word message / clear.
      if (this.words.length === 1) {
        burstMessage = this.words[0]; // This is a single word message.
      }
      if (this.words.length < 2) {
        // If the message is zero or one word long, just display it and we're done.
        this.messageSubject.next(burstMessage);
        return;
      }
      // This is a multi-word message, but we still want to show the first word immediately.
      this.messageSubject.next(this.words[0]);
      this.wordIndex = 1;
      const interval = setInterval(() => {
        this.wordIndex += 1;
        if (this.wordIndex === this.words.length - 1) {
          // We just incremented to the last word of the message.
          this.messageSubject.next(this.words.join(''));
          clearInterval(interval);
        }
        else
        {
          let partialMessage = '';
          for (let i = 0; i < this.wordIndex; i++) {
            partialMessage += this.words[i] + ' ';
          }
          this.messageSubject.next(partialMessage);
          // Don't clear the interval yet, we still have more words to draw
        }
      }, 200);
    }
  };

  constructor(private messageService: MessageService) {
    this.message$ = this.messageSubject.asObservable();
    this.messageService.message$.subscribe(this.observer);
  }

  ngOnInit() {
  }

}
