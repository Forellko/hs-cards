import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import TClass from 'types/Class';

const classes: TClass[] = [
  'Все',
  'Рыцарь смерти',
  'Охотник на демонов',
  'Друид',
  'Охотник',
  'Маг',
  'Паладин',
  'Жрец',
  'Разбойник',
];

function Class() {
  const [heroClass, setHerroClass] = useState<TClass>('Все');

  return (
    <FormControl
      fullWidth
      sx={{ maxWidth: '300px', minWidth: '300px' }}
      size="small"
    >
      <InputLabel id="demo-simple-select-label">Класс</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={heroClass}
        label="Класс"
        onChange={(event) => setHerroClass(event.target.value as TClass)}
      >
        {classes.map((classEl) => (
          <MenuItem key={classEl} value={classEl}>
            {classEl}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Class;
