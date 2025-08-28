
import ClientComponent from "./client"
import axios from "axios";
const fetchData = async() => {
    try{
      const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
      return result.data;
    } catch(error) {
        console.log("error in fetching the api", error);
    }
}

export default async function ServerComponent(){
    const data = await fetchData();
    console.log(data);
    return( 
        <ClientComponent serverData={data}/> 
    )
}  