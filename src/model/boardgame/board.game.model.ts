import { Country } from "src/model/general/country.model";
import { GameInfo } from "src/model/boardgame/game.info.model";
import { GameType } from "src/model/boardgame/game.type.model";

export class BoardGame {
    public id: number;
    public name: string;
    public picture: string;
    public info: GameInfo;
    public gameType: GameType;
}