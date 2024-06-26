import React, { useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import axios from 'axios';
import ICard from 'types/Card';
import InputCardModal from 'modals/InputCardModal';

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
      <button onClick={() => getAllCards(setCard)}>Get All</button>
      <button onClick={() => setModal(true)}>Open modal</button>
      <img src={card ? card[0].imageURL : ''} alt="img" />
      <InputCardModal handleClose={() => setModal(false)} open={modal} />
    </div>
  );
}

export default App;
