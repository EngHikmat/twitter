import React, { Fragment, useState } from 'react';
import './Content.css';
import Post from './Post';
import Avatar from '../RoutesComponents/avatar3.png';
import ic from '../RoutesComponents/ic.png';
import useTweetButton from '../CustomHooks/useTweetButton';
import {Link} from 'react-router-dom'
import DropDownHeader from './DropDownHeader' ;

export default function Content(){
    const {handleTweet,handleChange,disabled,post} = useTweetButton();
    

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];



    const name = localStorage.getItem('token')
    const userName = localStorage.getItem('userName')
    var day = new Date().getDate().toLocaleString();
    var date =  monthNames[new Date().getMonth().toLocaleString()];
   
    

    const ps = post.map(item=>(
    <div className="twt">
        <div><img src={Avatar} className="avatar rounded-circle"/>
        <div className='hd'><Link to='/profile'>{name}</Link>
        <a className="username" href='#'>{userName}</a>
        <span>.</span>
        <span>{date.substr(0,3) + " " + day}</span>
        <DropDownHeader/>
        </div>
        <br></br><p className="twetpost ">{item.value}</p>
        </div>
        
    <div className='twetFooter'>
        <span><i class="far fa-comment"></i></span>
        <span className='retweet'><i class="fas fa-retweet"></i></span>
        <span className='love'><i class="far fa-heart"></i></span>
        
        <span><i class="far fa-chart-bar"></i></span>
        </div>
    
    </div>
    ))

    
   

return(
    <div>
        
        <div className="Header">
        
            <h5 className="headno">Home</h5>
            <span><img src={ic} className="ic"/></span>

        </div><br></br>
        <div className="posts">
            <img src={Avatar} className="avatar rounded-circle"/>
            <textarea className="areapost" placeholder="What's happening?" id='textArea' onChange={handleChange}></textarea>
            <button className="btn btn-primary tweetsm" disabled={disabled} onClick={handleTweet}  >Tweet</button>
            <div className="cons">
                <div className="cons1">
                <span><i class="far fa-image a"></i></span>
                <span><i class="far fa-clone a"></i></span>
                <span><i class="fas fa-tasks"></i></span>
                <span><i class="far fa-grin"></i></span>
                <span><i class="far fa-calendar-alt"></i></span>
                </div>
            </div></div>
            <div className="brdr"></div>
            
           
            <Post value={ps}/>   
    </div>
)
    
}