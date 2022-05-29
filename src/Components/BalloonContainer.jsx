import React from 'react';
import styled from "styled-components"

const Container = styled.div`

    border:3px solid black;
    border-radius:7px;
    width:400px;
    height:500px;
    margin-left:50px;
    
`

export const BalloonContainer = () => {
  return (
    <div style={{display:"grid"}}>
        <h3> Balloon Container</h3>
        <Container>
                
        </Container>
    
    </div>
  )
}
