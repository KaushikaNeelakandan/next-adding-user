// import NotFound from "@/app/not-found";
import { notFound } from "next/navigation"
export const dynamicParams=true;
import { Suspense } from "react";
//import Loading from '.../loading';
// export async function getServerSideProps({ params }) {
//     const ticket = await getTicket(params.id);
//     if (!ticket) {
//         return {
//             notFound: true,
//         }
//     } 
//     return {
//         props: {
//             ticket,
//         },
//     }
// }


export async function generateStaticParams() {
const res=await fetch("http://localhost:4000/users")
const users=await res.json();
return users.map((user)=>({
    id:user.id.toString() 
}))


}

async function getTicket(id){
    await new Promise(resolve=>setTimeout(resolve,3000));
    const res=await fetch(`http://localhost:4000/users/${id}`,{
        next:{
            revalidate:0
        }
    });
    if(!res.ok)
    {
        notFound();
    }
    return res.json();
}

export default async function UserDetails({params}){
    const users=await getTicket(params.id);
    
    return(
        
        <div key={users.id} className="usercard">
            <h2>Details of {users.name}</h2>
            <h5>UserName: {users.username}</h5>
            <h5>Email: {users.email}</h5>
            <h5>Phone: {users.phone}</h5>
            <h5>Website: {users.website}</h5>
            <h5>Company: {users.company.name}</h5>
            <h5>Address: {users.address.street}, {users.address.suite}, {users.address.city}</h5>
        </div>
        
    )
}