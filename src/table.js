import React, { Fragment } from 'react'

const Table = (props) => {

    const getPosition = (e) => {
        e.preventDefault();
        let left = e.pageX;
        let top = e.pageY;

        // console.log("state Before Update: ", props.state)
        // console.log("Before Update: ", props.state.status)

        props.UpdateTable(props.id);


        // console.log("state After Update: ", props.state)
        // console.log("After Update: " + props.state.status)


        setInterval(() => {
            if (props.state.status === "dropped") {
                let table = document.getElementById(`${props.id}`);
                table.style.cssText = `position:absolute !important;top:${top - 244}px;left:${left - 44}px`;
            }
        }, 5);

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