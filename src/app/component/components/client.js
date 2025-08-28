'use client';
export default function ClientComponent({serverData}){
    return(
        <div>
            <h1>api data fetching</h1>
            <ul>
                {serverData.map((item,index) => (
                    <li key={index}> {item.title} <br/> {item.description}</li>
                ))} 
            </ul>
        </div>     
    )
}