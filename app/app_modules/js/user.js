'use strict';

let ruLang = require('../json/ru');

class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(ruLang.Hello + ", " + this.name);
    }

}

module.exports = User;