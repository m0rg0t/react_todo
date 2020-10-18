import { nanoid } from "@reduxjs/toolkit";

class CardModel {

    _id;
    _text = '';

    /**
     * 
     * @param {string} text 
     * @param {*} order 
     */
    constructor(text= 'card', order = 0) {
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

    toJSON() {
        return {
            text: this.text,
            id: this._id
        }
    }
}

export default CardModel;