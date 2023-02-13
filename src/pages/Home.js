import React, { useState, useEffect } from 'react';

import { Box } from '@mui/material'

import Exercises from '../components/Exercises';
import SearchExcercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
 

  return (
    <Box>
      <HeroBanner />
      <SearchExcercises />
      <Exercises />
    </Box>
  )
}

export default Home