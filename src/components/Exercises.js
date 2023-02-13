import React, { memo } from 'react';
import { Box } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises }) => {

  if (!exercises) return
  console.log('render exers inside ')



  const exercisesBlock = exercises.map(exercise => <ExerciseCard key={exercise.name} exercise={exercise} />);

  return (
    <Box>{exercisesBlock}</Box>
  )
}

export default memo(Exercises);

