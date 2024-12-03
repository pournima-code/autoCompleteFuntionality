import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.label,
});

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  // const [options, setOptions] = useState(null);


  const options = [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ];


      
  // const fetchOptions = async () => {
  //   const response = await fetch('https://api.example.com/items');
  //   const data = await response.json();
  //   return data.map((item) => ({ label: item.name, value: item.id }));
  // };

  // useEffect(() => {
  //   fetchOptions().then((data) => setOptions(data));
  // }, []);


  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Autocomplete
        // multiple
        options={options}
        filterOptions={filterOptions}
        getOptionLabel={(option) => option.label}
        value={selectedOption}
        onChange={(event, newValue) => setSelectedOption(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Select Framework" variant="outlined" />
        )}
      />
      {selectedOption && (
        <div style={{ marginTop: '20px' }}>
          <strong>Selected:</strong> {selectedOption.label}
        </div>
      )}
    </div>
  );
};

export default App;
