import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { BalloonContext } from '../Context/balloonContext';

const Stack = styled.div`
    margin-left:250px;
`
const Circle = styled.div`

    width:70px;
    height:70px;
    border-radius:100%;
    border:1px solid black;
    background-color:${(props)=>props.circleColor};
    margin-top:20px;

`
export const BalloonStack = () => {

  var balloonData = useContext(BalloonContext);

  console.log(balloonData)

  return (
    <Stack>
        <h3>Balloons</h3>
        

        {
          balloonData.map((item,id)=>{  
            return (

              <Circle key ={id} circleColor={item.circleColor}></Circle>

            )
            
          })
        }

    </Stack>
  )
}
