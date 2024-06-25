import React from 'react';
import style from './style.module.css';
import '@fontsource/roboto/300.css';
import { TextField } from '@mui/material';
import HSImage from './img/hs.png';
import SearchIcon from '@mui/icons-material/Search';

function MainPage() {
  return (
    <header>
      <div className={style.header}>
        <h1 className={style.header_h}>HS-CARD</h1>
        <div className={style.search}>
          <div className={style.icon}>
            <SearchIcon />
          </div>
          <TextField id="standard-basic" label="Поиск" variant="standard" />
        </div>
        <img src={HSImage} alt="hs" />
      </div>
    </header>
  );
}

export default MainPage;
