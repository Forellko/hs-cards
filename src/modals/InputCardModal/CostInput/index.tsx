import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import TCost from 'types/Cost';

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

interface Props {
  cost: TCost;
  setCost: Function;
}

function Cost({ cost, setCost }: Props) {
  return (
    <FormControl fullWidth size="small">
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
