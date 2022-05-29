import React from "react";
import { createContext,useState,useEffect } from "react";


export const BalloonContext = createContext();

export function BalloonProvider({children}){

    const [balloons, setBalloons] = useState([]);
    const [inputValue,setInputValue]= useState(null);

    useEffect(() => {  //it will handle infinite loop re-rendering
        var array = []; //for storing random circles

        for(let i=0;i<5;i++){
    
            let a = Math.floor(Math.random() * 256 >> 0);
            let b = Math.floor(Math.random() * 255 >> 0);
            let c = Math.floor(Math.random() * 254 >> 0);
    
            var randomColor = `rgb(${a}, ${b}, ${c})`; //it will generate random color 
    
            var data={
                
                circleNumber:i+1,
                circleColor:randomColor
            }
    
            array.push(data);  // storing all the random circles in it
        }
        console.log(...array)
        setBalloons([...array])  //it will set 5 balloons with random colors
    
    }, [])
    
    const handleShoot =()=>{

        
    }


    return ( 

        <BalloonContext.Provider  value= {balloons}>
            {children}  
        </BalloonContext.Provider>

    )
}