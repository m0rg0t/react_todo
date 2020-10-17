import React from 'react';
import { cn } from '@bem-react/classname';
import { Button, Card, EditableText } from "@blueprintjs/core";

import { useDispatch } from 'react-redux';
import {
    add, remove
} from './../../reducers/cards/cardsSlice';
const className = cn('TodoGroup');

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function TodoGroup() {
    const dispatch = useDispatch();
    return (
        <div className={className()}>
            <Card>
                <div className={className("GroupHeader")}>
                    <EditableText multiline={false} minLines={1} value={"Group Header"} />
                </div>
                <Button text={"Add new card"} onClick={() => dispatch(add({
                    id: 1,
                    card: { text: 'someCard' }
                }))} />

            </Card>
        </div>
    );
}

export default TodoGroup;