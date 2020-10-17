import {nanoid} from "@reduxjs/toolkit";

class GroupModel {
    _id;
    _name = '';
    constructor(name, cards = []) {
        this._id = nanoid();
        this.cards =  [...cards];
        this._name = name;
    }
    cards = [];

    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    toJSON() {
        return {
            name: this.name,
            id: this._id,
            cards: [...this.cards]
        }
    }
}

export default GroupModel;