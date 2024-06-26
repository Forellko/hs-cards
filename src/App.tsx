import React, { useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import InputCardModal from 'modals/InputCardModal';
import { useAppDispatch } from 'app/hooks';
import { getAllCardsThunk } from 'features/cards/cardSlice';

function App() {
  const [modal, setModal] = useState(false);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setModal(false);
    dispatch(getAllCardsThunk());
  };

  return (
    <div className="App">
      <MainPage />
      <button onClick={() => setModal(true)}>Open modal</button>
      <InputCardModal handleClose={() => handleClose()} open={modal} />
    </div>
  );
}

export default App;
