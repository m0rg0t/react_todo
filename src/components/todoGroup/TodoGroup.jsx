import React from 'react';
import { cn } from '@bem-react/classname';
import { Button, Card, EditableText } from "@blueprintjs/core";

import { useDispatch } from 'react-redux';
import {
    update, addCard
} from 'reducers/groups/groupsSlice';
import CardModel from "models/CardModel";
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
                    <EditableText multiline={false} minLines={1}
                        onChange={(value) => {
                            dispatch(update({
                                ...group,
                                name: value
                            }));
                        }}
                        value={group.name} />
                </div>
                <Button text={"Add new card"} onClick={() => dispatch(addCard(group.id, new CardModel()))} />
            </Card>
        </div>
    );
}

export default TodoGroup;