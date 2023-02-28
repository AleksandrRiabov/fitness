import React from 'react'
import { useLocation } from 'react-router-dom'

import { Box, capitalize, Typography } from '@mui/material';
import { minWidth } from '@mui/system';

const ExerciseDetails = () => {
  const { state } = useLocation();
  const { name, difficulty, equipment, instructions, muscle, type } = state;

  return (
    <Box
      sx={{
        padding: '20px'
      }}>
      <Typography
        sx={{
          fontSize: '2rem',
          textAlign: 'center'
        }}
      >{capitalize(name)}</Typography>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              flex: 1,
              minWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <Typography sx={{ fontSize: '1.3rem' }} >Muscle: {capitalize(muscle)}</Typography>
            <Typography sx={{ fontSize: '1.3rem' }} >Difficulrty: {capitalize(difficulty)}</Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>Equipment: {capitalize(equipment)}</Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>Type: {capitalize(type)}</Typography>
          </Box>
          <Box
            sx={{
              flex: { lg: 2, xs: 1 },
              minWidth: '300px',
            }}
          >
            <img
              className='muscleImage'
              src='https://static.wixstatic.com/media/ea496f_52e334c40a99457b895b93060409d0cd~mv2.jpg/v1/fill/w_1100,h_674,al_c,q_85,enc_auto/ea496f_52e334c40a99457b895b93060409d0cd~mv2.jpg'
            />
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '1.5rem', padding: '20px 0' }}>Instructions</Typography>
          <Typography> {instructions}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ExerciseDetails