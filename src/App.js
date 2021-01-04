import { useState } from 'react';
import './App.css';
import Table from './table';
import T from './tables.json'
var uItems = [];
var tables = T.tables;
function App() {

  const [table, setTable] = useState(tables);

  const allowDrop = (e) => {
    e.preventDefault();
    // console.log(table)
  }


  const UpdateTable = (id) => {
    let rItem = table.find(item => item.id === id);
    rItem.status = "dropped";
    setTable(table.filter(item => item.id !== id).concat(rItem));
    uItems.push(rItem);
    console.log({ table, uItems })

    // console.log(table[id-1].status)

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
