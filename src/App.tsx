import React, { useEffect, useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import axios from 'axios';
import ICard from 'types/Card';
import InputCardModal from 'modals/InputCardModal';

const createCard = async () => {
  const data: ICard = {
    addition: 'Мастерская Чудастера',
    cardType: 'Существо',
    classHero: 'Жрец',
    cost: '5',
    creationType: 'Все',
    description: '',
    id: 1111,
    name: 'Раза Запечатанный',
    rarity: 'Легендарная',
    spellsSchool: 'Все',
    imageURL:
      'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4147cfab6a1229a6b7ac2fd74f98f87b9710ffa1a746c5b780ec8e0d9114d2a6.png',
  };

  const resp = await axios({
    method: 'post',
    url: 'http://localhost:8000',
    data,
  });
  console.log(resp);
};

const getAllCards = async (setCard: any) => {
  const res = await axios({
    method: 'get',
    url: 'http://localhost:8000/cards',
  });
  console.log(res.data);
  setCard(res.data);
};

function App() {
  const [card, setCard] = useState<ICard[] | null>(null);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <MainPage />
      <button onClick={() => createCard()}>Create</button>
      <button onClick={() => getAllCards(setCard)}>Get All</button>
      <button onClick={() => setModal(true)}>Open modal</button>
      <img src={card ? card[0].imageURL : ''} alt="img" />
      <InputCardModal handleClose={() => setModal(false)} open={modal} />
    </div>
  );
}

export default App;
