import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Class() {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Класс</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={0}
        label="Класс"
        onChange={() => {}}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Class;
