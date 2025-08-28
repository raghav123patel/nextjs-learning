  import Link from 'next/link';
  
 export default function Home() {
     return(
      <div>
        <h1> welcome to project</h1>
        <ul>
          {/* <li><Link href="/about">Home</Link></li> */}
          <li><Link href="/home">About</Link></li>
          <li><Link href="/services">Services</Link></li>
        </ul>
      </div>           
     )
 }