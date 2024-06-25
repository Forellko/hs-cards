import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Addition() {
  return (
    <div>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Дополнения</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={0}
            label="Дополнения"
            onChange={() => {}}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Addition;
