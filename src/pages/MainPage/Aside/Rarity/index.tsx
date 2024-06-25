import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

type TRarity =
  | 'Все'
  | 'Обычная'
  | 'Бесплатная'
  | 'Редкая'
  | 'Эпическая'
  | 'Легендарная';

const rarityes: TRarity[] = [
  'Все',
  'Обычная',
  'Бесплатная',
  'Редкая',
  'Эпическая',
  'Легендарная',
];

function Rarity() {
  const [rarity, setRarity] = useState<TRarity>('Все');

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
