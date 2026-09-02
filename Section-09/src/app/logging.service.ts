import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log(message: string) {
    const timeStemp = new Date().toLocaleTimeString();
    console.log(`[${timeStemp}]: ${message}`);
  }
}
