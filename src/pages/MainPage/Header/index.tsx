import React from 'react';
import HSImage from './img/hs.png';
import style from './style.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

function Header() {
  return (
    <header>
      <div className={style.header}>
        <h1 className={style.header_h}>HS-CARD</h1>
        <div className={style.search}>
          <div className={style.search_icon}>
            <SearchIcon />
          </div>
          <TextField id="standard-basic" label="Поиск" variant="standard" />
        </div>
        <img src={HSImage} alt="hs" />
      </div>
    </header>
  );
}

export default Header;
