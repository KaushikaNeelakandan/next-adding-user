import Link from 'next/link';
async function getUsers(){
    await new Promise(resolve=>setTimeout(resolve,3000));
    const res=await fetch("http://localhost:4000/users",{
        next:{
            revalidate:0
        }
    });
    return res.json();
}

export default async function UserList()
{
    const users=await getUsers();
   
    return(
        <div><h2>User list page</h2>
            <Link href="/tickets/create">
            Create new user</Link>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>
                            <Link href={`/tickets/${user.id}`} className='link'>
                                {user.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}    