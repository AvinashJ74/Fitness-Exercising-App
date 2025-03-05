import React,{useState} from 'react';
import {Box} from '@mui/material';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import Herobanner from '../components/Herobanner';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises]=useState([]);
  return (
    <Box>
      <Herobanner/>
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}/>
      <Exercises 
      setExercises={setExercises}
      bodyPart={bodyPart} 
      exercises={exercises}/>
      sfgafh
    </Box>
  );
}

export default Home
