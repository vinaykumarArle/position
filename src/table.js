import React, { Fragment } from 'react'

const Table = (props) => {

    const getPosition = (e) => {
        e.preventDefault();
        const left = e.pageX;
        const top = e.pageY;
        props.UpdateTable(props.id);

        setInterval(() => {
            if (props.state.status === "dropped") {
                var table = document.getElementById(`${props.id}`);
                table.style.cssText = `position:absolute !important;top:${top - 244}px;left:${left - 44}px`;
            }
        }, 10);

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