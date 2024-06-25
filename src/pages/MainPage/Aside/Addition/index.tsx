import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

type TAddition =
  | 'Все'
  | 'Мастерская Чудастера'
  | 'Битва в Бесплодных землях'
  | 'Титаны'
  | 'Фестиваль легенд'
  | 'Основные наборы';

const additions: TAddition[] = [
  'Все',
  'Мастерская Чудастера',
  'Битва в Бесплодных землях',
  'Титаны',
  'Фестиваль легенд',
  'Основные наборы',
];

function Addition() {
  const [addition, setAddition] = useState<TAddition>('Все');

  return (
    <FormControl
      fullWidth
      sx={{ maxWidth: '300px', minWidth: '300px' }}
      size="small"
    >
      <InputLabel id="demo-select-small-label">Дополнения</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={addition}
        label="Дополнения"
        onChange={(event) => {
          setAddition(event.target.value as TAddition);
        }}
      >
        {additions.map((addition) => (
          <MenuItem key={addition} value={addition}>
            {addition}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Addition;
