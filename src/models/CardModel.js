import { nanoid } from "@reduxjs/toolkit";

class CardModel {

    _id;
    _text = '';

    /**
     * 
     * @param {string} text 
     * @param {*} order 
     */
    constructor(text, order = 0) {
        this._id = nanoid();
    }

    get id() {
        return this._id;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }

    toString() {
        return this.text;
    }
}

export default CardModel;