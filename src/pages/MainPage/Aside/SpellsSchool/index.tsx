import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function SpellsSchool() {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Школа заклинаний</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={0}
        label="Школа заклинаний"
        onChange={() => {}}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SpellsSchool;
