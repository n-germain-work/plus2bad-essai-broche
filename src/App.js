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

  const handleCreate = () => {
    if (columns <= 0 || rows <= 0) {
      alert('Columns AND rows must be superior to 0 ;)');
    } else {
      //Numéro de card
      let num = 1;
      //Etat temporaire de wall
      let temp = [];
      //Etat temporaire de rowsArray
      let tempRows = [];
      for (let i = 1; i <= rows; i++) {
        //Ajoute le numéro de la ligne
        tempRows.push(i);
        for (let o = 1; o <= columns; o++) {
          //Ajoute une card dans la row
          temp.push({
            num: num,
            type: 'raquette',
            x: i,
            y: o,
            active: true,
            item1: null,
            item1Active: false,
            item2: null,
            item2Active: false,
          });
          //Incremente le numéro de card
          num++;
        }
      }
      //Mets à jour les states
      setRowsArray(tempRows);
      setWall(temp);
    }
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
        <button type='button' className='creationButton' onClick={handleCreate}>
          Create
        </button>
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
