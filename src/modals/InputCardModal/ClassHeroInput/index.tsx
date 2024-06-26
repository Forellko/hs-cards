import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import TClassHero from 'types/ClassHero';

const classes: TClassHero[] = [
  'Все',
  'Рыцарь смерти',
  'Охотник на демонов',
  'Друид',
  'Охотник',
  'Маг',
  'Паладин',
  'Жрец',
  'Разбойник',
];

interface Props {
  heroClass: string;
  setHerroClass: Function;
}

function ClassHero({ heroClass, setHerroClass }: Props) {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label">Класс</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={heroClass}
        label="Класс"
        onChange={(event) => setHerroClass(event.target.value as TClassHero)}
      >
        {classes.map((classEl) => (
          <MenuItem key={classEl} value={classEl}>
            {classEl}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ClassHero;
