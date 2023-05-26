import React , {useState} from 'react'
import {Box} from "@mui/material"
import Exercises from "../components/Exercises.js"
import HeroBanner from "../components/HeroBanner.js"
import SearchExercises from "../components/SearchExercises.js"
const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      /> 
    </Box>
  )
}

export default Home