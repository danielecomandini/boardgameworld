import { Country } from "src/model/general/country.model";

export class GameEditor {

    constructor(private name: string, private country: Country) {
        this.name = name;
        this.country = country;
    }
}
