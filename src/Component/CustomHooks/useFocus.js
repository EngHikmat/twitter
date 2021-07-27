import React,{ useState } from 'react';

export default function useFocus(Normal, OnFColor){

    const [color , setColor] = useState(Normal);
    const [onFocusColor, setOnFocusColor] = useState(OnFColor)
    const [rescolor, setRes] = useState();

    function iconChange(){
        setRes(color)
        setColor(onFocusColor)
        console.log("Done")
    }

    function resetColor(){
        setColor(rescolor)
    }

    return {iconChange,resetColor,color}
    
}