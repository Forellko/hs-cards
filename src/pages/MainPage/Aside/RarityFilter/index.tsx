import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectRarity, setRarity } from 'features/cards/cardSlice';
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

function Rarity() {
  const rarity = useAppSelector(selectRarity);
  const dispatch = useAppDispatch();
  return (
    <FormControl
      fullWidth
      sx={{ maxWidth: '300px', minWidth: '300px' }}
      size="small"
    >
      <InputLabel id="demo-simple-select-label">Редкость</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={rarity}
        label="Редкость"
        onChange={(event) => dispatch(setRarity(event.target.value as TRarity))}
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
