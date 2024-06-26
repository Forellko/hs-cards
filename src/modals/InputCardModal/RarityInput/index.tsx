import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import TRarity from 'types/Rarity';

const rarityes: TRarity[] = [
  'Все',
  'Обычная',
  'Бесплатная',
  'Редкая',
  'Эпическая',
  'Легендарная',
];

interface Props {
  rarity: TRarity;
  setRarity: Function;
}

function Rarity({ rarity, setRarity }: Props) {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label">Редкость</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={rarity}
        label="Редкость"
        onChange={(event) => setRarity(event.target.value as TRarity)}
      >
        {rarityes.map((rarity) => (
          <MenuItem key={rarity} value={rarity}>
            {rarity}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Rarity;
