import React, { useEffect, useState } from 'react'
import './Intro.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { NavLink , Redirect} from 'react-router-dom'
import Home from './Home';
import useRedirect from './CustomHooks/useRedirect';


export default function Intro(){

    const {redirect} = useRedirect();
    
    if(redirect){
        return(
            <Route component={Home}/>
        )
    }
    
    

    return(

        <div className="intro ">
            <i class="fab fa-twitter intr "></i>
        </div>
    )

}