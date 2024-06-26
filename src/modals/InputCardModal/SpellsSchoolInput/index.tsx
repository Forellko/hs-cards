import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
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

interface Props {
  spellsSchool: TSpellsSchool;
  setSpellsSchool: Function;
}

function SpellsSchool({ spellsSchool, setSpellsSchool }: Props) {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label">Школа заклинаний</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={spellsSchool}
        label="Школа заклинаний"
        onChange={(event) =>
          setSpellsSchool(event.target.value as TSpellsSchool)
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
