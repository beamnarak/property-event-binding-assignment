import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() timeEvent = new EventEmitter<{ data: number, gameStatus: boolean }>();
  gameButtonTitle: string;
  gameStart: boolean;
  count: number;
  interval: any;

  constructor() { }

  ngOnInit() {
    this.gameStart = false;
    this.gameButtonTitle = 'Start';
    this.count = 0;
  }

  onGameToggle() {
    this.gameStart = !this.gameStart;
    if (this.gameStart) {
      this.gameButtonTitle = 'Stop';
      this.startGame();
    } else {
      this.gameButtonTitle = 'Start';
      this.stopGame();
    }
  }

  increaseCount() {
    this.count += 1;
  }

  startGame() {
    this.interval = setInterval(() => {
      this.increaseCount();
      this.timeEvent.emit({
        data: this.count,
        gameStatus: this.gameStart
      });
    }, 1000);
  }

  stopGame() {
    this.count = 0;
    this.timeEvent.emit({
      data: this.count,
      gameStatus: this.gameStart
    });
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
