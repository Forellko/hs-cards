import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectCreationType, setCreationType } from 'features/cards/cardSlice';
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

function CreationType() {
  const creationType = useAppSelector(selectCreationType);
  const dispatch = useAppDispatch();

  return (
    <FormControl
      fullWidth
      sx={{ maxWidth: '300px', minWidth: '300px' }}
      size="small"
    >
      <InputLabel id="demo-simple-select-label">Тип существа</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={creationType}
        label="Тип существа"
        onChange={(event) =>
          dispatch(setCreationType(event.target.value as TCreationType))
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
