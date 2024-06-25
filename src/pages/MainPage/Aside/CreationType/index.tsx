import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function CreationType() {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Тип существа</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={0}
        label="Тип существа"
        onChange={() => {}}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default CreationType;
