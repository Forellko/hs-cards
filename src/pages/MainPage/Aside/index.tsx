import style from './style.module.css';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
function Aside() {
  return (
    <aside className={style.aside}>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Дополнения</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={0}
            label="Дополнения"
            onChange={() => {}}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <div className={style.select}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Класс</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Класс"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={style.select}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Стоймость</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Стоймость"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={style.select}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Тип карты</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Тип карты"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={style.select}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Тип существа</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Тип существа"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={style.select}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Школа заклинаний
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Школа заклинаний"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={style.select}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Редкость</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Редкость"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
