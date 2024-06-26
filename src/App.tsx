import React, { useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import InputCardModal from 'modals/InputCardModal';

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <MainPage />
      <button onClick={() => setModal(true)}>Open modal</button>
      <InputCardModal handleClose={() => setModal(false)} open={modal} />
    </div>
  );
}

export default App;
