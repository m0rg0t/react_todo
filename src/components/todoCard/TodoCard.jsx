import React from 'react';
import {Button, Card, EditableText} from "@blueprintjs/core";
import './TodoCard.css';
import {cn} from "@bem-react/classname";
import {useDispatch} from "react-redux";
import {remove, update} from "reducers/cards/cardsSlice";
import {Draggable} from "react-beautiful-dnd";
import {removeCardInGroups} from "../../reducers/cards/cardsSlice";

const className = cn('TodoCard');

function TodoCard({card}) {
    const dispatch = useDispatch();
    return (
        <div className={className()}>
            <EditableText multiline={true} minLines={3} maxLines={12} value={card.text}
                          onChange={(text) => {
                              dispatch(update({
                                  ...card, text
                              }));
                          }}/>
            <Draggable key={card.id} draggableId={card.id} index={0} shouldRespectForcePress>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}>
                        <Card>
                            <EditableText multiline={true} minLines={3} maxLines={12} value={card.text}
                                          onChange={(text) => {
                                              dispatch(update({
                                                  ...card, text
                                              }));
                                          }}/>
                            <Button onClick={() => {
                                console.log("clicked");
                                dispatch(removeCardInGroups(card.id));
                            }
                            } text={"Delete card"}/>
                        </Card>
                    </div>
                )}
            </Draggable>
        </div>
    );
}

export default TodoCard;