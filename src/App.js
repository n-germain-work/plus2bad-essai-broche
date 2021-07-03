import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  //Stocke le nombre de colonnes de cards
  const [columns, setColumns] = useState(0);
  //Stocke le nombre de lignes de cards
  const [rows, setRows] = useState(0);
  //Stocke l'état global du mur
  const [wall, setWall] = useState([]);
  //Stocke un tableau contenant le numéro de chaque ligne
  //Permet de faire un map pour créer autant de div 'row' que nécessaire
  const [rowsArray, setRowsArray] = useState([]);

  const handleCreate = (c, r, existingData) => {
    if (c <= 0 || r <= 0) {
      alert('Columns AND rows must be superior to 0 ;)');
    } else {
      //Numéro de card
      let num = 1;
      //Etat temporaire de wall
      let temp = [];
      //Etat temporaire de rowsArray
      let tempRows = [];
      for (let i = 1; i <= r; i++) {
        //Ajoute le numéro de la ligne
        tempRows.push(i);
        for (let o = 1; o <= c; o++) {
          //Ajoute une card dans la row
          temp.push({
            num: num,
            type: 'raquette',
            x: i,
            y: o,
            active: true,
            item1: '',
            item1Active: false,
            item2: '',
            item2Active: false,
          });
          //Incremente le numéro de card
          num++;
        }
      }
      //Si la fonction reçoit un tableau existant (add/delete rows/columns)
      if (existingData) {
        for (let i = 0; i < temp.length; i++) {
          for (let o = 0; o < existingData.length; o++) {
            //Si les position x et y des cartes coïncident
            if (
              temp[i].x === existingData[o].x &&
              temp[i].y === existingData[o].y
            ) {
              //Remettre toutes les données pertinentes
              temp[i].active = existingData[o].active;
              temp[i].item1 = existingData[o].item1;
              temp[i].item1Active = existingData[o].item1Active;
              temp[i].item2 = existingData[o].item2;
              temp[i].item2Active = existingData[o].item2Active;
            }
          }
        }
      }
      //Mets à jour les states
      setRowsArray(tempRows);
      setWall(temp);
    }
  };

  const handleAddRow = () => {
    //Incremente le state
    setRows(parseInt(rows) + 1);
    //Relance une création totale, en contournant l'asynchronisme du state
    handleCreate(columns, parseInt(rows) + 1, wall);
  };

  const handleAddColumn = () => {
    setColumns(parseInt(columns) + 1);
    handleCreate(parseInt(columns) + 1, rows, wall);
  };

  const handleDeleteRow = () => {
    let tempRows = parseInt(rows) - 1;
    if (tempRows === 0) tempRows = 1;
    setRows(tempRows);
    handleCreate(columns, tempRows, wall);
  };

  const handleDeleteColumn = () => {
    let tempColumns = parseInt(columns) - 1;
    if (tempColumns === 0) tempColumns = 1;
    setColumns(tempColumns);
    handleCreate(tempColumns, rows, wall);
  };

  return (
    <div className='App'>
      <div className='creationSpace'>
        <label htmlFor='columns'>
          _Columns_:
          <input
            name='columns'
            value={columns}
            className='inputCreation'
            onChange={(e) => setColumns(e.target.value)}
          ></input>
        </label>
        <label htmlFor='rows'>
          _Rows_____:
          <input
            name='rows'
            value={rows}
            className='inputCreation'
            onChange={(e) => setRows(e.target.value)}
          ></input>
        </label>
        <button
          type='button'
          className='creationButton'
          onClick={() => handleCreate(columns, rows)}
        >
          Create
        </button>

        <div className='addButtons'>
          <button
            type='button'
            className='creationButton'
            onClick={handleAddRow}
          >
            Add row
          </button>
          <button
            type='button'
            className='creationButton'
            onClick={handleAddColumn}
          >
            Add column
          </button>
        </div>

        <div className='deleteButtons'>
          <button
            type='button'
            className='creationButton'
            onClick={handleDeleteRow}
          >
            Delete last row
          </button>
          <button
            type='button'
            className='creationButton'
            onClick={handleDeleteColumn}
          >
            Delete last column
          </button>
        </div>
      </div>

      {rowsArray.map((row) => (
        <div className='row'>
          {wall
            .filter((space) => space.x === row)
            .map((space) => (
              <Card space={space} wall={wall} setWall={setWall} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
