import React from 'react';
import { cn } from '@bem-react/classname';
import { Button, Card, EditableText } from "@blueprintjs/core";

import { useDispatch } from 'react-redux';
import {
    add
} from './../../reducers/cards/cardsSlice';
const className = cn('TodoGroup');

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function TodoGroup({ group }) {
    const dispatch = useDispatch();

    return (
        <div className={className()}>
            <Card>
                <div className={className("GroupHeader")}>
                    <EditableText multiline={false} minLines={1} value={group.name} />
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