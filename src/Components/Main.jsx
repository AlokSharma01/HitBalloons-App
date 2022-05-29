import React from 'react';
import { BalloonContainer } from './BalloonContainer';
import { BalloonStack } from './BalloonStack';
import { Buttons } from './Buttons';

export const Main = () => {
  return (
    <div style={{display:"flex"}}>
        <BalloonContainer/>
        <BalloonStack/>
        <Buttons/>
    </div>
  )
}
