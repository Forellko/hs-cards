import React, { useState } from 'react';
import HSImage from './img/hs.png';
import style from './style.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InputCardModal from 'modals/InputCardModal';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectSearch, setSearch } from 'features/cards/cardSlice';

function Header() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);

  return (
    <header>
      <div className={style.header}>
        <h1 className={style.header_h}>HS-CARDS</h1>
        <div className={style.search}>
          <div className={style.search_icon}>
            <SearchIcon />
          </div>
          <TextField
            id="standard-basic"
            label="Поиск"
            variant="standard"
            value={search}
            onChange={(event) => {
              dispatch(setSearch(event.target.value));
            }}
          />
        </div>
        <div className={style.add_icon} onClick={() => setOpen(true)}>
          <AddIcon className={style.add_icon_svg} />
        </div>
        <img src={HSImage} alt="hs" />
        <InputCardModal
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
        />
      </div>
    </header>
  );
}

export default Header;
