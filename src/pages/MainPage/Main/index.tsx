import style from './style.module.css';
import { useEffect, useState } from 'react';
import {
  getAllCardsThunk,
  selectAddition,
  selectCards,
  selectCardType,
  selectClassHero,
  selectCost,
  selectCreationType,
  selectRarity,
  selectSpellsSchool,
} from 'features/cards/cardSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import OpenCardModal from 'modals/OpenCardModal';
import ICard from 'types/Card';
function Main() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards);
  const [openModal, setOpenModal] = useState(false);
  const [currentCard, setCurrentCard] = useState<ICard | null>(null);
  const [filteredCards, setFilteredCards] = useState<ICard[] | null>(null);

  const additionSelect = useAppSelector(selectAddition);
  const cardTypeSelect = useAppSelector(selectCardType);
  const classHero = useAppSelector(selectClassHero);
  const cost = useAppSelector(selectCost);
  const creationType = useAppSelector(selectCreationType);
  const rarity = useAppSelector(selectRarity);
  const spellsSchool = useAppSelector(selectSpellsSchool);

  useEffect(() => {
    const filtCards =
      cards
        .filter(
          (card) => card.addition === additionSelect || additionSelect === 'Все'
        )
        .filter(
          (card) => card.cardType === cardTypeSelect || cardTypeSelect === 'Все'
        )
        .filter((card) => card.classHero === classHero || classHero === 'Все')
        .filter((card) => card.cost === cost || cost === 'Все')
        .filter(
          (card) => card.creationType === creationType || creationType === 'Все'
        )
        .filter((card) => card.rarity === rarity || rarity === 'Все')
        .filter((card) => card.spellsSchool === spellsSchool) ||
      spellsSchool === 'Все';

    setFilteredCards(filtCards);
  }, [
    cards,
    additionSelect,
    cardTypeSelect,
    classHero,
    cost,
    creationType,
    rarity,
    spellsSchool,
  ]);

  useEffect(() => {
    dispatch(getAllCardsThunk());
  }, []);

  return (
    <div className={style.main}>
      <div className={style.grid}>
        {filteredCards &&
          filteredCards.map((card) => {
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
