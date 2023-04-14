class AGreateClass {
    constructor(greatNumber) {
        this.greatNumber = greatNumber;
    }

    returnGreatThings() {
        return this.greatNumber;
    }
}

class AnotherGreatClass extends AGreateClass {
    constructor(greatNumber, greatWord) {
        super(greatNumber);
        this.greatWord = greatWord;
    }
    returnGreatThings() {
        let greatThing = super.returnGreatThings();
        return [greatThing, this.greatWord];
    }
}

const aGreatObject = new AnotherGreatClass(42, 'adventure')
console.log(aGreatObject.returnGreatThings());