 import ClientComponent from "./components/client";
import ServerComponent from "./components/server";
// import ClientPost from "./postData/client"
// import ServerPost from "./postData/server" 
export default function HomePage() {
    return(
        <div>
            <h1> Data form api is </h1>
            <ServerComponent/>
            {/* <ServerPost/> */}

        </div>      
    )   
} 