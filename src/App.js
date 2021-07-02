import { useState } from 'react';
import './App.css';
import Card from './components/Card';

const arrayWall = [
  {
    num: 1,
    type: 'raquette',
    x: 1,
    y: 1,
    active: true,
    item1: 'ref1',
    item1Active: true,
    item2: 'ref2',
    item2Active: true,
  },
  {
    num: 2,
    type: 'raquette',
    x: 2,
    y: 1,
    active: true,
    item1: 'ref3',
    item1Active: true,
    item2: 'ref4',
    item2Active: true,
  },
  {
    num: 3,
    type: 'raquette',
    x: 3,
    y: 1,
    active: true,
    item1: 'ref5',
    item1Active: true,
    item2: 'ref6',
    item2Active: true,
  },
  {
    num: 4,
    type: 'raquette',
    x: 4,
    y: 1,
    active: true,
    item1: 'ref7',
    item1Active: true,
    item2: 'ref8',
    item2Active: true,
  },
  {
    num: 5,
    type: 'raquette',
    x: 5,
    y: 1,
    active: true,
    item1: 'ref9',
    item1Active: true,
    item2: 'ref10',
    item2Active: true,
  },
  {
    num: 6,
    type: 'raquette',
    x: 6,
    y: 1,
    active: true,
    item1: 'ref11',
    item1Active: true,
    item2: 'ref12',
    item2Active: true,
  },
  {
    num: 7,
    type: 'raquette',
    x: 1,
    y: 2,
    active: true,
    item1: 'ref13',
    item1Active: true,
    item2: 'ref14',
    item2Active: true,
  },
  {
    num: 8,
    type: 'raquette',
    x: 2,
    y: 2,
    active: true,
    item1: 'ref15',
    item1Active: true,
    item2: 'ref16',
    item2Active: true,
  },
  {
    num: 9,
    type: 'raquette',
    x: 3,
    y: 2,
    active: true,
    item1: 'ref17',
    item1Active: true,
    item2: 'ref18',
    item2Active: true,
  },
  {
    num: 10,
    type: 'raquette',
    x: 4,
    y: 2,
    active: true,
    item1: 'ref19',
    item1Active: true,
    item2: 'ref20',
    item2Active: true,
  },
  {
    num: 11,
    type: 'raquette',
    x: 5,
    y: 2,
    active: true,
    item1: 'ref21',
    item1Active: true,
    item2: 'ref22',
    item2Active: true,
  },
  {
    num: 12,
    type: 'raquette',
    x: 6,
    y: 2,
    active: true,
    item1: 'ref23',
    item1Active: true,
    item2: 'ref24',
    item2Active: true,
  },
];

function App() {
  const [wall, setWall] = useState(arrayWall);
  return (
    <div className='App'>
      <div className='row'>
        {wall
          .filter((space) => space.y === 1)
          .map((space) => (
            <Card space={space} wall={wall} setWall={setWall} />
          ))}
      </div>
      <div className='row'>
        {wall
          .filter((space) => space.y === 2)
          .map((space) => (
            <Card space={space} wall={wall} setWall={setWall} />
          ))}
      </div>
    </div>
  );
}

export default App;
