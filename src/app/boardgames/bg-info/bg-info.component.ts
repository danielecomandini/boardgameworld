import { Component, OnInit , Input } from '@angular/core';
import { BoardGame } from 'src/model/boardgame/board.game.model';

@Component({
  selector: 'bgw-bg-info',
  templateUrl: './bg-info.component.html',
  styleUrls: ['./bg-info.component.css']
})
export class BgInfoComponent implements OnInit {

  @Input() selectedGame: BoardGame = new BoardGame();

  constructor() { }

  ngOnInit() {
  }

}
