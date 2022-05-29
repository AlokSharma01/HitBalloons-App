import React from "react";
import { createContext,useState,useEffect } from "react";


export const BalloonContext = createContext();

export function BalloonProvider({children}){

    const [balloons, setBalloons] = useState([]);
    const [value,setValue]= useState("");
    const [containerArray,setContainerArray] = useState([]);

    useEffect(() => {  //it will handle infinite loop re-rendering
        var array = []; //for storing random circles

        for(let i=0;i<5;i++){
    
            let a = Math.floor(Math.random() * 256 >> 0);
            let b = Math.floor(Math.random() * 255 >> 0);
            let c = Math.floor(Math.random() * 254 >> 0);
    
            var randomColor = `rgb(${a}, ${b}, ${c})`; //it will generate random color 
    
            var data={
                
                circleNumber:i+1,
                circleColor:randomColor,
                prevPosition:i+1,
            }
    
            array.push(data);  // storing all the random circles in it
        }
        setBalloons([...array])  //it will set 5 balloons with random colors
    
    }, [])

    
    const handleShoot =()=>{

        for(let j=0;j<balloons.length;j++){

        //  console.log(value,balloons[j].circleNumber)
            

            if(value==(balloons[j].circleNumber)){  //here we use == so that it will not check for the same type

                 setContainerArray([...containerArray,balloons[j]]);        
                 break;        
            }
        }
        
        

        //reArrange positions
            let tempArr = balloons.filter( (x) => x.circleNumber!=value) // filter the balloon which has same number as value

            tempArr.sort((a,b)=> a.prevPosition-b.prevPosition)
            tempArr.map((item,index)=> item.circleNumber = index+1); //reArranging the position after filteration

            setBalloons([...tempArr]) //after updating the array we are updating balloon stack here
        
        setValue("");
    }


    const handleReverse=()=>{

            console.log("reversing....")
    }

    return ( 

        <BalloonContext.Provider  value = {{balloons,value,setValue,handleShoot,containerArray,handleReverse}}>
            {children}  
        </BalloonContext.Provider>

    )
}