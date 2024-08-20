import React from 'react';
import { Card, Box, Grid } from '@mui/material';

const SelectionBox = ({ item, selected, onClick }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        margin: 1,
        backgroundColor: selected ? '#e0e0e0' : '#fff',
        cursor: 'pointer',
        width: '100%',
        padding: 2,
        boxShadow: selected ? '0px 0px 10px rgba(0, 0, 0, 0.2)' : 'none'
      }}
      onClick={onClick}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, width: '100%' }}>
        <img src={item.img} alt={item.title} style={{ width: '100%', height: 'auto', maxWidth: 150, maxHeight: 50 }} />
      </Box>
    </Card>
  );
};

const SelectionBoxes = ({ items, selectedIndexes, setSelectedIndexes }) => {
  const handleClick = (index) => {
    setSelectedIndexes((prev) => {
      if (prev?.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <Box sx={{ width: '100%', marginTop: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <SelectionBox
              item={item}
              selected={selectedIndexes?.includes(index)}
              onClick={() => handleClick(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SelectionBoxes;
