import React from 'react';
import { cn } from "@bem-react/classname";
import {useSelector} from "react-redux";
import TodoGroup from "components/todoGroup";
import {selectAllGroups} from "reducers/groups/groupsSlice";
import './Groups.css';

const className = cn('Groups');

function Groups() {
    const allGroups = useSelector(selectAllGroups);
    return (
        <div className={className()}>
            {
                Object.entries(allGroups).map(([id, group]) => {
                    return <TodoGroup group={group} />
                })
            }
        </div>);
}

export default Groups;