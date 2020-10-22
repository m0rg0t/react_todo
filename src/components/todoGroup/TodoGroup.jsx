import React from 'react';
import {cn} from '@bem-react/classname';
import {Card, EditableText, Icon, Menu, MenuItem, Popover} from "@blueprintjs/core";

import {useDispatch, useSelector} from 'react-redux';
import {
    update, deleteGroupAndCards, addCard
} from 'reducers/groups/groupsSlice_old';
import CardModel from "models/CardModel";
import TodoCard from "components/todoCard";
import './TodoGroup.css';
import {Droppable} from "react-beautiful-dnd";

const className = cn('TodoGroup');

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function TodoGroup({group}) {
    const dispatch = useDispatch();

    const cards = useSelector(state => {
        return group.cards?.map(cardId => state.cards[cardId]);
    });

    return (
        <div className={className()}>
            <Droppable droppableId={group.id} placeholder={"Droppable"}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                         {...provided.droppableProps}
                         style={{backgroundColor: snapshot.isDraggingOver ? 'black' : 'grey'}}>
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
        </div>
    );
}

export default TodoGroup;