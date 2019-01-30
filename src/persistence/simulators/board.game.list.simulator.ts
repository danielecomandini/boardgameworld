import { BoardGame } from "src/model/boardgame/board.game.model";
import { DancoUtils } from "src/persistence/simulators/util.simulator";
import { GameInfo } from "src/model/boardgame/game.info.model";
import { GameType } from "src/model/boardgame/game.type.model";

export class BoardGameListSimulator {

    boardGameList: BoardGame[] = [];
    dancoUtil: DancoUtils = new DancoUtils();

    getBoardGameList() {
        this.boardGameList.push( this._createAndGetCatan() );
        this.boardGameList.push( this._createAndGetCluedo() );
        // this.boardGameList.push( this._createAndGetForbiddenIsland() );
        // this.boardGameList.push( this._createAndGetHive() );
        // this.boardGameList.push( this._createAndGetMunchkin() );
        // this.boardGameList.push( this._createAndGetPuertoRico() );
        // this.boardGameList.push( this._createAndGetSaboteur() );
        // this.boardGameList.push( this._createAndGetStoneAge() );
        // this.boardGameList.push( this._createAndGetThurnAndTaxis() );
        return this.boardGameList;
    }

    _createAndGetCatan() {
        let info: GameInfo = new GameInfo();
        info.minPlayer = 3;
        info.maxPlayer = 4;
        info.timeDuration = 60;
        info.playableInTwo = true;
        info.minAge = 10;
        info.preparationTime = 10;
        info.year = 1995;
        
        let gameType: GameType = new GameType( "Stile tedesco" );

        let catan: BoardGame = new BoardGame();
        catan.id = 1;
        catan.name = "Catan";
        catan.picture = "CATAN.PNG";
        catan.info = info;
        catan.gameType = gameType;

        return catan;
    }
    
    _createAndGetCluedo() {
        let info: GameInfo = new GameInfo();
        info.minPlayer = 2;
        info.maxPlayer = 6;
        info.timeDuration = 60;
        info.playableInTwo = true;
        info.minAge = 8;
        info.preparationTime = 5;
        info.year = 1948;
        
        let gameType: GameType = new GameType( "Giallo deduttivo" );

        let cluedo: BoardGame = new BoardGame();
        cluedo.id = 2;
        cluedo.name = "Cluedo";
        cluedo.picture = "CLUEDO.PNG";
        cluedo.info = info;
        cluedo.gameType = gameType;

        return cluedo;
    }

}