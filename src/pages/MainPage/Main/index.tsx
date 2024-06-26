import style from './style.module.css';
import { useEffect, useState } from 'react';
import { getAllCardsThunk, selectCards } from 'features/cards/cardSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import OpenCardModal from 'modals/OpenCardModal';
import ICard from 'types/Card';
function Main() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards);
  const [openModal, setOpenModal] = useState(false);
  const [currentCard, setCurrentCard] = useState<ICard | null>(null);

  useEffect(() => {
    dispatch(getAllCardsThunk());
  }, []);

  return (
    <div className={style.main}>
      <div className={style.grid}>
        {cards &&
          cards.map((card) => {
            return (
              <img
                src={card.imageURL}
                alt="card"
                key={card.imageURL}
                className={style.card}
                onClick={() => {
                  setOpenModal(true);
                  setCurrentCard(card);
                }}
              />
            );
          })}
        {currentCard && (
          <OpenCardModal
            open={openModal}
            card={currentCard}
            handleClose={() => setOpenModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Main;
