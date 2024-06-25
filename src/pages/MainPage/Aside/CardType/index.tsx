import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import TCardType from 'types/CardType';

const cardTypes: TCardType[] = [
  'Все',
  'Герой',
  'Существо',
  'Заклинание',
  'Оружие',
  'Область',
];

function Cost() {
  const [cardType, setCardType] = useState<TCardType>('Все');

  return (
    <FormControl
      fullWidth
      sx={{ maxWidth: '300px', minWidth: '300px' }}
      size="small"
    >
      <InputLabel id="demo-simple-select-label">Тип карты</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={cardType}
        label="Тип карты"
        onChange={(event) => setCardType(event.target.value as TCardType)}
      >
        {cardTypes.map((cardType) => (
          <MenuItem key={cardType} value={cardType}>
            {cardType}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Cost;
