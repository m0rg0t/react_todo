import React from 'react';
import {Card, EditableText} from "@blueprintjs/core";
import './TodoCard.css';
import {cn} from "@bem-react/classname";

const className = cn('TodoCard');

function TodoCard(card) {
    return (
        <div className={className()}>
            <Card>
                <EditableText multiline={true} minLines={3} maxLines={12} value={card.name} />
            </Card>
        </div>
    );
}

export default TodoCard;