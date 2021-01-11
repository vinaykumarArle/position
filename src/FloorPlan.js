import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import uItems from './FloorPlan.json'
function FloorPlan() {

    //setting initial position to re-render items
    var leftLow = uItems.map(table => (
        parseInt(table.left)
    ))
    var topLow = uItems.map(table => (
        parseInt(table.top)
    ))

    const leftPo = Math.min.apply(Math, leftLow) - 40
    const topPo = Math.min.apply(Math, topLow) - 40
    console.log("low-left: ", leftPo, "low-top: ", topPo)

    return (
        <Fragment>
            <div className="container">
                <div>
                    <Link className="create" to="/">Create Floor Plan</Link>
                </div>
                <h3>Floor Plan:</h3>
                <div
                    id="droparea"
                    className="canvas-box">

                    {uItems.map(table => (
                        <div
                            key={table.id}
                            className={table.ClassName}
                            status={table.status}
                            style={{ position: table.position, top: (table.top - topPo) + 'px', left: (table.left - leftPo) + 'px' }}
                            onClick={() => alert("Hi vinay, you clicked on Table : " + table.tableName)}
                        >
                            {table.tableName}
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>

    );
}
export default FloorPlan