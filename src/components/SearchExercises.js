import React, { useState, useEffect } from 'react';

import useGetExercise from '../hooks/useGetExercise';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import Exercises from './Exercises';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const { error, loading, exercises } = useGetExercise(query);

  const handleSearch = () => {
    if (search.trim()) {
      setQuery(search);
      setSearch('');
    } else {
      alert('Can not be empty');
    }
  }

  console.log('render')

  return (
    <Stack
      alignItems='center'
      mt='37px'
      justifyContent='center'
      p='20px'
    >
      <Typography
        fontWeight='700'
        sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }}
        mb='50px'
        textAlign='center'
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box >
        <Box
          position='relative'
          sx={{
            width: { lg: '800px', xs: '350px' },
          }}
          m='auto'
        >
          <TextField
            sx={{
              input: {
                fontWeight: 700,
                border: 'none',
                borderRadius: '4px'
              },
              width: { lg: '800px', xs: '350px' },
              background: '#fff',
              borderRadius: '40px'
            }}
            height='76px'
            value={search}
            onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
            placeholder='Search Exercises'
            type='text'
          />
          <Button
            onClick={handleSearch}
            className='search-btn'
            sx={{
              bgcolor: '#ff2625',
              color: '#fff',
              textTransform: 'none',
              width: { lg: '175px', xs: '80px' },
              fontSize: { lg: '20px', xs: '14px' },
              height: '56px',
              position: 'absolute',
              right: 0
            }}
          >
            Search
          </Button>
        </Box>
            <Exercises loading={loading} error={error.isError} exercises={exercises} />
      </Box>
    </Stack>
  )
}

export default SearchExercises