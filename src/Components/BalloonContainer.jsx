import React from 'react';
import styled from "styled-components";
import { useContext } from 'react';
import { BalloonContext } from '../Context/balloonContext';

const Container = styled.div`

    display:grid;
    grid-template-columns: 1fr 100px;
    border:3px solid black;
    border-radius:7px;
    width:300px;
    height:500px;
    margin-left:50px;
    padding-left:30px;
    padding-right:30px;
    
`
const Circle = styled.div`
    width:70px;
    height:70px;
    border-radius:100%;
    border:1px solid grey;
    background-color:${(props)=>props.circleColor};
    cursor:pointer;

`

export const BalloonContainer = () => {
  const {containerArray,handleReverse} = useContext(BalloonContext);
  return (
    <div style={{display:"grid"}}>
        <h3> Balloon Container</h3>
        <Container>

        {
          containerArray.map((item,id)=>{  
            return (

              <Circle key ={id} circleColor={item.circleColor} onClick={()=>handleReverse(item)}></Circle>

            )
            
          })
        }
                
        </Container>
    
    </div>
  )
}
