import React, { Fragment } from 'react'

const Table = (props) => {

    const getPosition = (e) => {
        e.preventDefault();
        let left = (Math.abs(e.pageX - props.cleft) / (props.dwidth)) * 100;
        let top = (Math.abs(e.pageY - props.ctop) / (props.dheight)) * 100;
        console.log(props.dwidth, props.dheight)
        console.log("Actual :x: ", e.pageX, "y:", e.pageY, "container-Top:", props.ctop, "container-Left:", props.cleft)
        const newValue = {
            "id": props.id,
            "tableName": props.tableName,
            "ClassName": props.className,
            "status": "dropped",
            "position": "absolute",
            "left": Math.floor(left),
            "top": Math.floor(top)
        }
        props.UpdateTable(newValue);
        console.log("left:" + (Math.floor(left)) + "%", "top:" + (Math.floor(top)) + "%");
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