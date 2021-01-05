import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import uItems from './FloorPlan.json'
function FloorPlan() {
    return (
        <Fragment>
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
                        style={{ position: table.position, top: (table.top) + 'px', left: (table.left) + 'px' }}
                    >
                        {table.tableName}
                    </div>
                ))}
            </div>
        </Fragment>

    );
}
export default FloorPlan