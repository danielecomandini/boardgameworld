export class GameAuthor {

    constructor(private name: string, private surname: string) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + " " + this.surname;
    }
}