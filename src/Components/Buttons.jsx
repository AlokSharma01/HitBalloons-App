import React from 'react'
import styled from 'styled-components'

const ShootArea = styled.div`

    margin-left:300px;

`
const Input = styled.input`

    height:30px;
    border:1px solid grey;;
    border-radius:5px;
    margin-top: 50px;

`
const Shoot = styled.button`

    width:100px;
    height:50px;
    border-radius:10px;
    border:none;
    cursor:pointer;
    background-color:#4CAF50;
    color:white;
    font-size:25px;
    margin-top:20px;
`

export const Buttons = () => {
  return (
    <ShootArea>
        <h3>Shoot Here</h3>
        <Input type="number" placeholder='Enter Balloon Number' onChange={(e)=> e.currentTarget.value}/><br/>
        <Shoot>Shoot</Shoot>
    </ShootArea>
  )
}
