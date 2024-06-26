import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectClassHero, setClassHero } from 'features/cards/cardSlice';
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

function ClassHero() {
  const heroClass = useAppSelector(selectClassHero);
  const dispatch = useAppDispatch();

  return (
    <FormControl
      fullWidth
      sx={{ maxWidth: '300px', minWidth: '300px' }}
      size="small"
    >
      <InputLabel id="demo-simple-select-label">Класс</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={heroClass}
        label="Класс"
        onChange={(event) =>
          dispatch(setClassHero(event.target.value as TClassHero))
        }
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
