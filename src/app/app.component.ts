import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: number;
  gameStatus: boolean;

  onGameRun(timeEvent: { data: number, gameStatus: boolean }){
    this.data = timeEvent.data;
    this.gameStatus = timeEvent.gameStatus;
  }
}
