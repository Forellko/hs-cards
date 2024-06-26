import style from './style.module.css';
import hscard from './hscard.png';
import { useCallback, useEffect, useState } from 'react';
import ICard from 'types/Card';
import { GetAllCards } from 'api/CardAPI/GetAllCards';
function Main() {
  const [cards, setCards] = useState<ICard[]>();

  const getCards = useCallback(async () => {
    const response = await GetAllCards();
    setCards(response);
    console.log(response);
  }, []);

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className={style.main}>
      <div className={style.grid}>
        {cards &&
          cards.map(({ imageURL }) => (
            <img
              src={imageURL}
              alt="card"
              key={imageURL}
              className={style.card}
            />
          ))}
        <img src={hscard} alt="card" className={style.card} />
        <img src={hscard} alt="card" className={style.card} />
        <img src={hscard} alt="card" className={style.card} />
        <img src={hscard} alt="card" className={style.card} />
        <img src={hscard} alt="card" className={style.card} />
        <img src={hscard} alt="card" className={style.card} />
      </div>
    </div>
  );
}

export default Main;
