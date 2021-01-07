import { Fragment, useState } from 'react';
import './App.css';
import Table from './table';
import T from './tables.json'
import { Link } from 'react-router-dom';

var tables = T.tables;

function Create() {

    const [uItems, setUItems] = useState([]);
    const [isDropped, setIsDropped] = useState("false");
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [cTop, setCTop] = useState(0)
    const [cLeft, setcLeft] = useState(0)


    const allowDrop = (e) => {
        e.preventDefault();
    }


    const UpdateTable = (values) => {
        setUItems(oldValues => [...oldValues, values]);
        setIsDropped("true");
    }

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(uItems));

    document.addEventListener('DOMContentLoaded', () => {
        var po = document.querySelector("#droparea");
        setWidth(parseInt(po.offsetWidth));
        setHeight(parseInt(po.offsetHeight));
        setCTop(parseInt(po.offsetTop));
        setcLeft(parseInt(po.offsetLeft));
        console.log(width, height, cTop, cLeft);
    })

    const getPosition = (e, Table) => {
        e.preventDefault();
        let left = (Math.abs(e.pageX - cLeft) / (width)) * 100;
        let top = (Math.abs(e.pageY - cTop) / (height)) * 100;

        const newPosition = nTable => {
            const table = uItems.find(table => table.id === nTable.id);
            table.left = Math.floor(left);
            table.top = Math.floor(top);
            const newTable = {
                "id": nTable.id,
                "tableName": nTable.tableName,
                "ClassName": nTable.ClassName,
                "status": "dropped",
                "position": "absolute",
                "left": table.left,
                "top": table.top
            }
            const NT = uItems.filter(table => table.id !== nTable.id).concat(newTable)
            setUItems(NT)
            console.log(left, top, table.left, table.top, NT)
            console.log(table)
        }
        newPosition(Table);
    }
    console.log(uItems)

    return (
        <Fragment>
            <div className="container">

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
                            dwidth={width}
                            dheight={height}
                            ctop={cTop}
                            cleft={cLeft}
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
                            draggable
                            className={table.ClassName}
                            status={table.status}
                            style={{ position: table.position, top: (table.top) + '%', left: (table.left) + '%' }}
                            onDragEnd={(e) => getPosition(e, table)}
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
