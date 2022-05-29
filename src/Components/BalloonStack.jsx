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
    border:1px solid grey;
    background-color:${(props)=>props.circleColor};
    margin-top:20px;

`
export const BalloonStack = () => {

  var {balloons} = useContext(BalloonContext);


  return (
    <Stack>
        <h3>Balloons</h3>
        

        {
          balloons.map((item,id)=>{  
            return (

              <Circle key ={id} circleColor={item.circleColor}></Circle>

            )
            
          })
        }

    </Stack>
  )
}
