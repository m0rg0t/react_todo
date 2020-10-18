import React from 'react';
import {cn} from '@bem-react/classname';
import {Button, Card, EditableText} from "@blueprintjs/core";

import {useDispatch, useSelector} from 'react-redux';
import {
    update, deleteGroupAndCards, addCard
} from 'reducers/groups/groupsSlice';
import CardModel from "models/CardModel";
import TodoCard from "components/todoCard";
import './TodoGroup.css';

const className = cn('TodoGroup');

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function TodoGroup({group}) {
    const dispatch = useDispatch();

    const cards = useSelector(state => {
        return group.cards.map(cardId => state.cards[cardId]);
    });

    return (
        <div className={className()}>
            <Card className={className('Card')}>
                <div className={className("GroupHeader")}>
                    <Button text={"Delete group"}
                            onClick={() => dispatch(deleteGroupAndCards(group))}/>
                    <EditableText multiline={false} minLines={1}
                                  onChange={(value) => {
                                      dispatch(update({
                                          ...group,
                                          name: value
                                      }));
                                  }}
                                  value={group.name}/>
                    <Button text={"Add new card"} onClick={() => dispatch(
                        addCard(group.id, (new CardModel()).toJSON())
                    )}/>
                </div>

            </Card>
            {
                cards.map(card => {
                    return <TodoCard card={card}/>
                })
            }
        </div>
    );
}

export default TodoGroup;