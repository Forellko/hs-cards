import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectSpellsSchool, setSpellsSchool } from 'features/cards/cardSlice';
import { useState } from 'react';
import TSpellsSchool from 'types/SpellsSchool';

const spellsSchools: TSpellsSchool[] = [
  'Все',
  'Тайная магия',
  'Огонь',
  'Лед',
  'Природа',
  'Свет',
  'Тьма',
  'Скверна',
];

function SpellsSchool() {
  const spellsSchool = useAppSelector(selectSpellsSchool);
  const dispatch = useAppDispatch();
  return (
    <FormControl
      fullWidth
      sx={{ maxWidth: '300px', minWidth: '300px' }}
      size="small"
    >
      <InputLabel id="demo-simple-select-label">Школа заклинаний</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={spellsSchool}
        label="Школа заклинаний"
        onChange={(event) =>
          dispatch(setSpellsSchool(event.target.value as TSpellsSchool))
        }
      >
        {spellsSchools.map((spellsSchool) => (
          <MenuItem key={spellsSchool} value={spellsSchool}>
            {spellsSchool}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SpellsSchool;
