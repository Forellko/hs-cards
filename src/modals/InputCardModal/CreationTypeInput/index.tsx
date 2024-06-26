import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import TCreationType from 'types/CreationType';

const creationTypes: TCreationType[] = [
  'Все',
  'Демон',
  'Дракон',
  'Зверь',
  'Механизм',
  'Мурлок',
  'Нага',
  'Нежить',
  'Пират',
  'Свинобраз',
  'Тотем',
  'Элементаль',
];

interface Props {
  creationType: TCreationType;
  setCreationType: Function;
}

function CreationType({ creationType, setCreationType }: Props) {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label">Тип существа</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={creationType}
        label="Тип существа"
        onChange={(event) =>
          setCreationType(event.target.value as TCreationType)
        }
      >
        {creationTypes.map((creationType) => (
          <MenuItem key={creationType} value={creationType}>
            {creationType}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CreationType;
