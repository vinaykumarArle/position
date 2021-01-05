import React, { Fragment } from 'react'

const Table = (props) => {

    const getPosition = (e) => {
        e.preventDefault();
        let left = e.pageX;
        let top = e.pageY;

        const newValue = {
            "id": props.id,
            "tableName": props.tableName,
            "ClassName": props.className,
            "status": "dropped",
            "position": "absolute",
            "left": left - 44,
            "top": top - 244
        }
        props.UpdateTable(newValue);
        console.log(props.status)

        console.log("left:" + (left - 20), "top:" + (top - 20));
        console.log(props.id)
    }

    return (
        <Fragment>
            <div
                id={props.id}
                draggable
                className={props.className}
                onDragEnd={e => { getPosition(e) }}
            >
                {props.tableName}
            </div>
        </Fragment>
    )
}

export default Table