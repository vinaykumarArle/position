import { Fragment, useState } from 'react';
import './App.css';
import Table from './table';
import T from './tables.json'
import { Link } from 'react-router-dom';

var tables = T.tables;

function Create() {

    const [uItems, setUItems] = useState([]);
    const [isDropped, setIsDropped] = useState("false");
    console.log("new Tables", uItems)

    const allowDrop = (e) => {
        e.preventDefault();
    }


    const UpdateTable = (values) => {
        setUItems(oldValues => [...oldValues, values]);
        setIsDropped("true");
        console.log("old Tables", tables)
    }

    if (uItems.length > 0) {
        console.log("New Array length: ", uItems.length)
    }

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(uItems));

    return (
        <Fragment>
            <div className="App">

                <h3>Table Types:</h3>
                <div className="drag-area">
                    {tables.map(table => (
                        <Table
                            id={table.id}
                            key={table.id}
                            draggable
                            className={table.ClassName}
                            tableName={table.tableName}
                            UpdateTable={UpdateTable}
                        />
                    ))}
                </div>

                <h3>Floor Plan:</h3>
                <div
                    id="droparea"
                    onDragOver={e => { allowDrop(e) }}
                    className="canvas-box">

                    {isDropped ? uItems.map(table => (
                        <div
                            key={table.id}
                            className={table.ClassName}
                            status={table.status}
                            style={{ position: table.position, top: (table.top) + 'px', left: (table.left) + 'px' }}

                        >
                            {table.tableName}
                        </div>
                    )) : null}
                </div>
                <div>
                    <a id="FloorPlan" className="Download" href={dataStr} download="FloorPlan.json">Download Floor Plan</a>
                    <Link className="view" to="/FloorPlan">View Floor Plan</Link>
                </div>
            </div>

        </Fragment>

    );
}
export default Create;
