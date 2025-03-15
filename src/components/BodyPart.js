import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import back2 from '../assets/icons/back2.png';
import chest2 from '../assets/icons/chest2.png';
import cardio2 from '../assets/icons/cardio2.png';
import allbody from '../assets/icons/allbody.png';
import lowerarm from '../assets/icons/lowerarm.png';
import lowerleg from '../assets/icons/lowerleg.png';
import neck from '../assets/icons/neck.png';
import shoulder from '../assets/icons/shoulder.png';
import upperarm from '../assets/icons/upperarm.png';
import upperleg from '../assets/icons/upperleg.png';
import waist from '../assets/icons/waist.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const getImageSrc = (part) => {
    if (part.toLowerCase() === 'back') return back2;
    if (part.toLowerCase() === 'chest') return chest2;
    if (part.toLowerCase() === 'cardio') return cardio2;
    if (part.toLowerCase() === 'all') return allbody;
    if (part.toLowerCase() === 'lower arms') return lowerarm;
    if (part.toLowerCase() === 'lower legs') return lowerleg;
    if (part.toLowerCase() === 'neck') return neck;
    if (part.toLowerCase() === 'shoulders') return shoulder;
    if (part.toLowerCase() === 'upper arms') return upperarm;
    if (part.toLowerCase() === 'upper legs') return upperleg;
    if (part.toLowerCase() === 'waist') return waist;
    return Icon;
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { borderTop: '4px solid #00008B', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
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
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#000000" textTransform="capitalize"> {item}</Typography>
    </Stack>
  );
};
export default BodyPart;
