
import ClientPost from "./client"
import axios from "axios"
const postsData = async(title, completed) => {
    try{
      const results = await axios.post("https://jsonplaceholder.typicode.com/todos", {title,completed});
      return results.data;
    } catch(error){
      console.log("error in posting in the api", error);
    }
}   

export default async function ServerPost() {     
    const datas = await postsData();
    console.log(datas);
    return(
        <ClientPost data={datas}/>
    )
}