import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import back1 from '../assets/icons/back1.png';
import chest1 from '../assets/icons/chest1.png';
import cardio from '../assets/icons/cardio.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const getImageSrc = (part) => {
    if (part.toLowerCase() === 'back') return back1;
    if (part.toLowerCase() === 'chest') return chest1;
    if (part.toLowerCase() === 'cardio') return cardio;
    return Icon;
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={getImageSrc(item)}
        alt={item}
        style={{ width: '100px', height: '100px' }}
      />      {/* <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} /> */}
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  );
};
export default BodyPart;
