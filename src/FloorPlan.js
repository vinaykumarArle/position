import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import uItems from './FloorPlan.json'
function FloorPlan() {

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
                            draggable
                            className={table.ClassName}
                            status={table.status}
                            style={{ position: table.position, top: (table.top) + '%', left: (table.left) + '%' }}
                            onClick={() => alert("Hi vinay !!")}
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