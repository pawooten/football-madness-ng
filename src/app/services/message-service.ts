import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private message: string;

  constructor() {}

  send(message: string): void {
    this.message = message;
    console.log(`message service: ${message}`);
   }
}
