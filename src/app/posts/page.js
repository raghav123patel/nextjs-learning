import axios from "axios";

export default async function Posts() {
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(result.data);

    return(
        <div>
            <h1> api fetching posts data</h1>
            <ul>
                {result.data.map((item,index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>        
        </div>   
    )
}