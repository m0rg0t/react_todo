import React from 'react';
import {Card, EditableText} from "@blueprintjs/core";
import './Button.css';
import {cn} from "@bem-react/classname";

const className = cn('TodoCard');

function TodoCard() {
    return (
        <div className={className()}>
            <Card>
                <EditableText multiline={true} minLines={3} maxLines={12} value={"Group Header"} />
            </Card>
        </div>
    );
}

export default TodoCard;