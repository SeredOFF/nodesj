'use strict';

let ruTranslator = require('../json/ru');

class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(ruTranslator.Hello + ", " + this.name);
    }

}

module.exports = User;