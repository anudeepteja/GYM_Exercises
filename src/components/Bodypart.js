import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const Bodypart = ({item , bodyPart , setBodyPart}) => {
  return (
    <div>
      <Stack
        type="button"
        justifyContent='center'
        alignItems='center'
        className="bodyPart-card"
        sx={{
          borderTop: bodyPart === item ? '4px solid #ff2625' : '',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px' ,
          width: '270px' , 
          height: '280px' ,
          cursor: 'pointer' ,
          gap: '72px'
        }}
        onClick = {() => {
          setBodyPart(item);
          window.scrollTo({top:1800 , left: 100 , behaviour: 'smooth'})
        }}
      >
        <img src={Icon} alt="dumbell"  style={{width:'40px' , height: '4opx'}}/>
        <Typography fontSize="24px" fontWieght="bold" color='#3A1212' textTransform="capitalize">
          {item}
        </Typography>
      </Stack>
    </div>
  );
};

export default Bodypart;
