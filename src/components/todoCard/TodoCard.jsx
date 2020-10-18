import React from 'react';
import {Button, Card, EditableText} from "@blueprintjs/core";
import './TodoCard.css';
import {cn} from "@bem-react/classname";
import {useDispatch} from "react-redux";
import {remove, update } from "reducers/cards/cardsSlice";

const className = cn('TodoCard');

function TodoCard(card) {
    const dispatch = useDispatch();
    return (
        <div className={className()}>
            <Card>
                <EditableText multiline={true} minLines={3} maxLines={12} value={card.name}
                              onChange={() => dispatch(update(card))}/>
                <Button onClick={() => dispatch(remove(card.id))} text={"Delete card"}/>
            </Card>
        </div>
    );
}

export default TodoCard;