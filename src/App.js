import { useState } from 'react';
import './App.css';
import Table from './table';
// import T from './tables.json'
function App() {

  const [table, setTable] = useState([
    {
      "id": 1,
      "tableName": "T1",
      "ClassName": "square-table",
      "status": "NM"
    },
    {
      "id": 2,
      "tableName": "T2",
      "ClassName": "square-table",
      "status": "NM"
    },
    {
      "id": 3,
      "tableName": "T3",
      "ClassName": "square-table",
      "status": "NM"
    },
    {
      "id": 4,
      "tableName": "T4",
      "ClassName": "square-table",
      "status": "NM"
    },
    {
      "id": 5,
      "tableName": "C1",
      "ClassName": "circle-table",
      "status": "NM"
    },
    {
      "id": 6,
      "tableName": "C2",
      "ClassName": "circle-table",
      "status": "NM"
    },
    {
      "id": 7,
      "tableName": "C3",
      "ClassName": "circle-table",
      "status": "NM"
    },
    {
      "id": 9,
      "tableName": "C4",
      "ClassName": "circle-table",
      "status": "NM"
    },
    {
      "id": 10,
      "tableName": "R1",
      "ClassName": "rectangle-table",
      "status": "NM"
    },
    {
      "id": 11,
      "tableName": "R2",
      "ClassName": "rectangle-table",
      "status": "NM"
    },
    {
      "id": 12,
      "tableName": "R3",
      "ClassName": "rectangle-table",
      "status": "NM"
    },
    {
      "id": 13,
      "tableName": "R4",
      "ClassName": "rectangle-table",
      "status": "NM"
    }
  ]);

  const allowDrop = (e) => {
    e.preventDefault();
    // console.log(table)
  }

  const UpdateTable = (id) => {
    const rItem = table.find(item => item.id === id);
    rItem.status = "dropped";
    setTable(table.filter(item => item.id !== id).concat(rItem));
    console.log({ table })
  }
  return (

    <div className="App">

      <h3>Table Types:</h3>
      <div className="drag-area">
        {table.filter(status => status.status === "NM").map(table => (
          <Table
            id={table.id}
            key={table.id}
            draggable
            className={table.ClassName}
            tableName={table.tableName}
            state={table}
            UpdateTable={UpdateTable}
          />
        ))}
      </div>

      <h3>Floor Plan:</h3>
      <div
        id="droparea"
        onDragOver={e => { allowDrop(e) }}
        className="canvas-box">
        {table.filter(status => status.status === "dropped").map(table => (
          <Table
            id={table.id}
            key={table.id}
            draggable
            className={table.ClassName}
            tableName={table.tableName}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
