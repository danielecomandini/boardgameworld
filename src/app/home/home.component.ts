import { Component, OnInit } from '@angular/core';
import { BoardGame } from 'src/model/boardgame/board.game.model';
import { BoardGameListSimulator } from 'src/persistence/simulators/board.game.list.simulator';

@Component({
  selector: 'dbg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  boardGameList: BoardGame[] = [];

  constructor() { }

  ngOnInit() {
    let boardGameListSimulator: BoardGameListSimulator = new BoardGameListSimulator();
    this.boardGameList = boardGameListSimulator.getBoardGameList();
  }

}
