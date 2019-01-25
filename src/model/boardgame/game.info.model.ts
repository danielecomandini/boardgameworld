import { GameEspansion } from "src/model/boardgame/game.espansion.model";

export class GameInfo {
    public minAge: number;
    public preparationTime: number;
    public minPlayer: number;
    public maxPlayer: number;
    public timeDuration: number;
    public playableInTwo: boolean;
    public espansion: GameEspansion[];
    public year: number;
}