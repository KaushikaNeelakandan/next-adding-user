import Link from 'next/link'
export default function NotFound(){
    return(
        <main>
            <h2>There was a problem</h2>
            <p>we could not find page you are looking for </p>
            <p>Go back to the <Link href="/">Dashboard</Link></p>
        </main>
    )
}