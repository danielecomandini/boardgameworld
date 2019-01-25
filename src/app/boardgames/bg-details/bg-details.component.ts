import { Component, OnInit } from '@angular/core';
import { BoardGame } from 'src/model/boardgame/board.game.model';
import { BoardGameListSimulator } from 'src/persistence/simulators/board.game.list.simulator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bgw-bg-details',
  templateUrl: './bg-details.component.html',
  styleUrls: ['./bg-details.component.css']
})
export class BgDetailsComponent implements OnInit {

  boardGameId: number = null;
  boardGameList: BoardGame[] = [];
  boardGame: BoardGame = null;
  
  constructor(private activatedRoute: ActivatedRoute) {
      let params: any = this.activatedRoute.snapshot.params;
      console.log( "My parameter was: " + params.id );
      this.boardGameId = params.id;
  }

  ngOnInit() {
    let boardGameListSimulator: BoardGameListSimulator = new BoardGameListSimulator();
    this.boardGameList = boardGameListSimulator.getBoardGameList(); 
    for( let i=0; i<this.boardGameList.length; i++ ) {
      let elem = this.boardGameList[i];
      if( elem.id == this.boardGameId ) {
        this.boardGame = elem;
        break;
      }
    }
  }

  getSelectedBoardGame() {
    return this.boardGame;
  }

}
