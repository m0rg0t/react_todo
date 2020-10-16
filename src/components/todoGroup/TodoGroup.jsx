import React from 'react';
import { cn } from '@bem-react/classname';
import {Button, Card, Classes, EditableText, Elevation, H5, Label, Slider, Switch} from "@blueprintjs/core";

const className = cn('TodoGroup');

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function TodoGroup() {
    return (
        <div className={className()}>
            <Card>
                <div className={className("GroupHeader")}>
                    <EditableText multiline={false} minLines={1} value={"Group Header"} />
                </div>
                <Button text={"Add new card"}/>
            </Card>
        </div>
    );
}

export default TodoGroup;