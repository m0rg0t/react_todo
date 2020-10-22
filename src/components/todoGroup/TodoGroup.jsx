import React from 'react';
import {cn} from '@bem-react/classname';
import {Button, Card, EditableText, Icon, Menu, MenuItem, Popover} from "@blueprintjs/core";

import {useDispatch, useSelector} from 'react-redux';
import {
    update, deleteGroupAndCards, addCard
} from 'reducers/groups/groupsSlice';
import CardModel from "models/CardModel";
import TodoCard from "components/todoCard";
import './TodoGroup.css';
import {DragDropContext, Droppable} from "react-beautiful-dnd";

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

    const onDragEnd = (e) => {
        console.log("onDragEnd", e);
    };
    return (
        <div className={className()}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef}
                             {...provided.droppableProps}>
                            <Card className={className('Card')}>
                                <div className={className("GroupHeader")}>
                                    <EditableText multiline={false} minLines={1}
                                                  className={className('GroupName')}
                                                  onChange={(value) => {
                                                      dispatch(update({
                                                          ...group,
                                                          name: value
                                                      }));
                                                  }}
                                                  value={group.name}/>
                                    <Popover content={
                                        <Menu>
                                            <MenuItem text="Add card"
                                                      onClick={() => dispatch(
                                                          addCard(group.id, (new CardModel('card text')).toJSON())
                                                      )}/>
                                            <MenuItem text="Copy"/>
                                            <MenuItem text="Delete"
                                                      onClick={() => dispatch(deleteGroupAndCards(group))}/>
                                        </Menu>}>
                                        <Icon icon="menu" className={className('GroupMenu')}/>
                                    </Popover>
                                </div>

                            </Card>

                            {
                                cards.map(card => {
                                    return <TodoCard card={card}/>
                                })
                            }
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default TodoGroup;