import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectCardType, setCardType } from 'features/cards/cardSlice';
import TCardType from 'types/CardType';

const cardTypes: TCardType[] = [
  'Все',
  'Герой',
  'Существо',
  'Заклинание',
  'Оружие',
  'Область',
];

function CardType() {
  const cardTypeSelect = useAppSelector(selectCardType);
  const dispatch = useAppDispatch();

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
        value={cardTypeSelect}
        label="Тип карты"
        onChange={(event) =>
          dispatch(setCardType(event.target.value as TCardType))
        }
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
