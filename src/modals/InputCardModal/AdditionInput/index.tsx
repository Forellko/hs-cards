import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import TAddition from 'types/Addition';

const additions: TAddition[] = [
  'Все',
  'Мастерская Чудастера',
  'Битва в Бесплодных землях',
  'Титаны',
  'Фестиваль легенд',
  'Основные наборы',
];

interface Props {
  addition: string;
  setAddition: Function;
}

function Addition({ addition, setAddition }: Props) {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-select-small-label">Дополнения</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={addition}
        label="Дополнения"
        onChange={(event) => {
          setAddition(event.target.value);
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
