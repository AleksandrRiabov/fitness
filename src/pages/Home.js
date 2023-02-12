import React, { useState, useEffect } from 'react';
import useGetExercise from '../hooks/useGetExercise';

import { Box } from '@mui/material'

import Exercises from '../components/Exercises';
import SearchExcercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';




const Home = () => {
  // const { error, loading, data } = useGetExercise('press');

  // console.log(loading)
  // if (loading) return <Box>Loading.....</Box>
  // if (error.isError) return <Box> Sorry, Something Went Wrong... {error.message} </Box>

  // console.log(data)

  return (
    <Box>
      <HeroBanner />
      <SearchExcercises />
      <Exercises />
    </Box>
  )
}

export default Home