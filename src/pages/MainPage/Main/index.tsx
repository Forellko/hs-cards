import style from './style.module.css';
import { useEffect, useState } from 'react';
import { getAllCardsThunk, selectCards } from 'features/cards/cardSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
function Main() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards);

  useEffect(() => {
    dispatch(getAllCardsThunk());
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
      </div>
    </div>
  );
}

export default Main;
