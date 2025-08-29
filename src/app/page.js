import Link from 'next/link';
  
 export default function Home() {
     return(
      <div>
        <h1> welcome to project</h1>
        <ul>
          {/* <li><Link href="/about">Home</Link></li> */}
          <li><Link href="/home">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/component">API fetching</Link></li>
          <li><Link href="/products/id">API fetching through id</Link></li>
        </ul>            
      </div>                 
     )
 }