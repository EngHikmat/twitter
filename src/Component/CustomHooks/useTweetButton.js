import React,{useState} from 'react';

export default function useTweetButton(){
    const [disabled , setDisabled] = useState(true);
    const [post, setPost] = useState([]);
    const [cont , setCont] = useState();
   
    



    function handleChange(e){
        if(e.target.value.length>0){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }

        setCont(e.target.value);

        
    }

    function handleTweet(){
        setPost([... post,{
            id:post.length,
            value: cont
        }])  
       

        
     document.getElementById("textArea").value=''
     setDisabled(true)
    }

    return{handleTweet, handleChange,disabled,post}

}