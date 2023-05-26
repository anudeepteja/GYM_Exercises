import React , {useEffect , useState } from 'react'
import {Stack , Typography , Box ,TextField , Button} from '@mui/material'
import {fetchData , exerciseOptions} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar'

const SerachExercises = ({setExercises , bodyPart , setBodyPart}) => {
  const [search, setsearch] = useState('');
  
  const [bodyparts, setbodyparts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () =>{
      const bodypartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , exerciseOptions);
      setbodyparts(['all', ...bodypartsData]);
    }

    fetchExercisesData();
  }, [])
  
  const handleSearch = async () => {
    if(search) 
    {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises' , exerciseOptions);
      const searchedExercises = exerciseData.filter( 
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setsearch('');
      setExercises(searchedExercises);
    }
    else
    {
      console.log("hhaa");
    }
  }

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px' , xs: '30px'} }} mb="50px" textAlign="center">
        Awesome Exercises You Should <br />Know !
      </Typography>
      <Box position="relative" mb="72px"> 
        <TextField 
          sx={{
            input:{
              fontWeight: '700' , 
              border: 'none' ,
              borderRadius: '40px'
            },
            width: {lg: '800px' , xs: '350px'} , 
            borderRadius: '40px' , 
            backgroundColor: '#fff'
          }} 
          placeholder='Search Exercises' 
          value={search} 
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          height="76px"
          type="text"
          
        />
        <Button className='search-btn' 
          sx={{
            bgcolor: '#FF2625',
            color: '#fff' , 
            textTransform: 'none' , 
            width: {lg: '175px' , xs: '80px'} , 
            fontSize: {lg: '20px' , xs : '14px'} , 
            height: '56px' ,
            position: 'absolute' ,
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative' , width:'100%' , p: '20px'}}>
          <HorizontalScrollbar data={bodyparts}
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart}
            isBodyParts
          />
      </Box>
    </Stack>
  )
}

export default SerachExercises