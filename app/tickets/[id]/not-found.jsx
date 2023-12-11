import Link from 'next/link'
export default function NotFound() {    
return(
    <div>
        <h1>You hit a breakwall</h1>
        <h2>404 - Page Not Found</h2>
        <Link href="/">Dashboard</Link>
    </div>
)
}