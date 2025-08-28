'use client';
import axios from "axios";
import  {useState}  from "react"
export default function ClientPost({data}){
     
    const [posts, setPost] = useState({
        title: "",
        completed: true,
    })

    const handleChange = (e) => {
        setPost({
            ...posts,    
            [e.target.name]: e.target.value,  
        })    
    }  
     
    const handleSave = async() => {
        const result = await axios.post("https://jsonplaceholder.typicode.com/todos", posts);
        console.log(result.data);    
        
        
        console.log("received data", data);                                 
       
    }          
            

    
    return( 
        <div>
            <h1>post in data</h1>       
            <input type="text" placeholder="enter the title" name="title" value={posts.title} onChange={handleChange} />
            <br/>
            <input type="text" placeholder="enter the completion status" name="completed" value={posts.completed} onChange={handleChange} />
            <br />
            <button onClick={handleSave}> Save</button>    
           
        </div>    
    )     
    
}