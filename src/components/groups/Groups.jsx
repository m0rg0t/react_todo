import React from 'react';
import {cn} from "@bem-react/classname";
import {useDispatch, useSelector} from "react-redux";
import TodoGroup from "components/todoGroup";
import {selectAllGroups} from "reducers/groups/groupsSlice_old";
import './Groups.css';
import {DragDropContext} from "react-beautiful-dnd";
import {moveFromGroup} from "../../reducers/groups/groupsSlice";

const className = cn('Groups');

function Groups() {
    const dispatch = useDispatch();
    const allGroups = useSelector(selectAllGroups);

    const onDragEnd = (e) => {
        console.log("onDragEnd", e);
        if (e.destination && e.source) {
            dispatch(moveFromGroup(e.source.droppableId, e.destination.droppableId, e.draggableId));
        }
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={className()}>
                {
                    allGroups && Object.entries(allGroups).map(([id, group]) => {
                        return <TodoGroup group={group} key={id}/>
                    })
                }
            </div>
        </DragDropContext>
    );
}

export default Groups;