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

interface Props {
  cardType: TCardType;
  setCardType: Function;
}

function CardType({ cardType, setCardType }: Props) {
  return (
    <FormControl fullWidth size="small">
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

export default CardType;
