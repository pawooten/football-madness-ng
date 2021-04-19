import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebugService {

  private readonly debugModeSubject = new BehaviorSubject<boolean>(false);
  readonly debugMode$ = this.debugModeSubject.asObservable();

  public enableDebugMode() {
    this.debugModeSubject.next(true);
  }
}
