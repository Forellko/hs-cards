import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectAddition } from 'features/cards/cardSlice';
import TAddition from 'types/Addition';
import { setAddition } from 'features/cards/cardSlice';

const additions: TAddition[] = [
  'Все',
  'Мастерская Чудастера',
  'Битва в Бесплодных землях',
  'Титаны',
  'Фестиваль легенд',
  'Основные наборы',
];

function Addition() {
  const additionSelect = useAppSelector(selectAddition);
  const dispatch = useAppDispatch();
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
        value={additionSelect}
        label="Дополнения"
        onChange={(event) => {
          dispatch(setAddition(event.target.value as TAddition));
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
