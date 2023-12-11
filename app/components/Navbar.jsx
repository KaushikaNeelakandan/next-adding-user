import Link from 'next/link'
import Image from 'next/image'
import logo from './favicon.ico'
export default function Navbar() {
    return(
        <nav className='navigation'>
            <Image src={logo} 
            alt="logo"
            width={70}
            quality={100}
            height={70}
            
             />
            <h1 className='hello'>Hello</h1>
            <Link href="/" className='link space'>Dashboard</Link><br/>
            <Link href="/tickets" className='link'>Users</Link>
        </nav>
    )
}