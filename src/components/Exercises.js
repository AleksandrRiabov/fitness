import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, loading, error }) => {

  if (!exercises) return
  console.log('render exers inside ')

  const exercisesBlock = exercises.map(exercise => <ExerciseCard key={exercise.name} exercise={exercise} />);

  return (
    <Box
      sx={{
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        width: { lg: '90%', xs: '98%' },
        flexWrap: 'wrap',
        marginTop: '50px'
      }}
    >
      {error ?
        <Box>
          <Typography>Oops..  Something went wrong. Please try again later!</Typography>
        </Box>
        : loading
          ? <Box> Loading...</Box>
          : exercisesBlock}
    </Box>
  )
}

export default memo(Exercises);


