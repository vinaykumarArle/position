import React, { Fragment } from 'react'

const Table = (props) => {

    const getPosition = (e) => {
        e.preventDefault();
        let left = (Math.abs(e.pageX - props.cleft) / (props.dwidth)) * 100;
        let top = (Math.abs(e.pageY - props.ctop) / (props.dheight)) * 100;

        const newValue = {
            "id": props.id,
            "tableName": props.tableName,
            "ClassName": props.className,
            "status": "dropped",
            "position": "absolute",
            "leftPer": Math.floor(left),
            "topPer": Math.floor(top),
            "left": e.pageX,
            "top": e.pageY
        }
        props.UpdateTable(newValue);
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