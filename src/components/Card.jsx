import './Card.css';

const Card = ({ space, wall, setWall }) => {
  const { num, item1, item2 } = space;

  //Se déclenche au click sur un item de card
  const handleItemClick = (num, item, itemNumber) => {
    const updateRef = prompt(`You had ${item}, what is the new ref ?`);
    if (!updateRef) {
      alert('You forgot something ^^');
      return;
    }
    const temp = [...wall];
    //Cherche
    for (let i in temp) {
      if (temp[i].num === num) {
        //remplace la référence
        temp[i][`item${itemNumber}`] = updateRef;
      }
    }
    setWall(temp);
  };

  //Se déclenche au click sur un bouton +/- en face d'un item
  const handlePlusMinus = (num, itemNumber) => {
    const temp = [...wall];
    //Cherche, vide la ref, et change le 'active' de l'item
    for (let i in temp) {
      if (temp[i].num === num) {
        //Si active, vide la ref
        if (temp[i][`item${itemNumber}Active`]) {
          temp[i][`item${itemNumber}`] = '';
        } else {
          //Si non active, demande la nouvelle ref
          const updateRef = prompt(`What is the new ref ?`);
          if (!updateRef) {
            alert('You forgot something ^^');
            return;
          }
          //Et mets à jour
          temp[i][`item${itemNumber}`] = updateRef;
        }
        //Inverse le statut active de l'item
        temp[i][`item${itemNumber}Active`] =
          !temp[i][`item${itemNumber}Active`];
      }
    }
    setWall(temp);
  };

  //Se déclenche au click sur le x pour clore la card, ou + pour la rouvrir
  const handleToggleCard = (num) => {
    const temp = [...wall];
    //Cherche
    for (let i in temp) {
      if (temp[i].num === num) {
        //Vide les références
        temp[i].item1 = '';
        temp[i].item2 = '';
        //Passe chaque item à inactive
        temp[i].item1Active = false;
        temp[i].item2Active = false;
        //Inverse le statut active de la card
        temp[i].active = !temp[i].active;
      }
    }
    setWall(temp);
  };

  //Se déclenche au click sur le bouton Print
  const handlePrint = (num) => {
    let item1;
    let item2;
    for (let i in wall) {
      if (wall[i].num === num) {
        //Vide les références
        item1 = wall[i].item1;
        item2 = wall[i].item2;
      }
    }
    if (item1 && item2) {
      alert(`Impression de la double étiquette ${item1} / ${item2} !`);
    } else {
      alert(`Impression de l'étiquette simple ${item1}${item2} !`);
    }
  };

  return (
    <div className={space.active ? 'Card' : 'Card disabled'}>
      {/* **Contient le numéro de carte et le x pour la clore** */}
      <div className='topSpace'>
        <div className='number'>{space.num}</div>
        <div
          className={space.active ? 'toggleCard' : 'toggleCard disabled'}
          onClick={() => handleToggleCard(num)}
        >
          {space.active ? 'x' : '+'}
        </div>
      </div>

      {/* **Contient le premier item de la broche et le bouton +/-** */}
      <div className='itemSSpace'>
        <div
          className={
            space.item1Active && space.active ? 'itemS' : 'itemS disabled'
          }
          onClick={() => handleItemClick(num, item1, 1)}
        >
          {space.item1}
        </div>
        <div
          className={space.active ? 'itemSModify' : 'itemSModify disabled'}
          onClick={() => handlePlusMinus(num, 1)}
        >
          {space.item1Active ? '-' : '+'}
        </div>
      </div>

      {/* **Contient le second item de la broche et le bouton +/-** */}
      <div className='itemSSpace'>
        <div
          className={
            space.item2Active && space.active ? 'itemS' : 'itemS disabled'
          }
          onClick={() => handleItemClick(num, item2, 2)}
        >
          {space.item2}
        </div>
        <div
          className={space.active ? 'itemSModify' : 'itemSModify disabled'}
          onClick={() => handlePlusMinus(num, 2)}
        >
          {space.item2Active ? '-' : '+'}
        </div>
      </div>

      {/* **Bouton Print pour lancer l'impression** */}
      <button
        type='button'
        className={space.active ? 'print' : 'print disabled'}
        onClick={() => handlePrint(num)}
      >
        Print
      </button>
    </div>
  );
};

export default Card;
