import { Country } from "src/model/general/country.model";
import { GameEditor } from "src/model/boardgame/game.editor.model";
import { GameAuthor } from "src/model/boardgame/game.author.model";
import { GameInfo } from "src/model/boardgame/game.info.model";
import { GameType } from "src/model/boardgame/game.type.model";

export class BoardGame {
    public id: number;
    public name: string;
    public picture: string;
    public country: Country;
    public editors: GameEditor[];
    public authors: GameAuthor[];
    public info: GameInfo;
    public gameType: GameType;
}