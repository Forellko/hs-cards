import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

type TCost =
  | 'Все'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10+';

const costs: TCost[] = [
  'Все',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10+',
];

function Cost() {
  const [cost, setCost] = useState<TCost>('Все');

  return (
    <FormControl
      fullWidth
      sx={{ maxWidth: '300px', minWidth: '300px' }}
      size="small"
    >
      <InputLabel id="demo-simple-select-label">Стоймость</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={cost}
        label="Стоймость"
        onChange={(event) => setCost(event.target.value as TCost)}
      >
        {costs.map((cost) => (
          <MenuItem key={cost} value={cost}>
            {cost}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Cost;
