"use client"
import {useRouter} from "next/navigation"
import { useState } from "react"
import classes from './createform.module.css'
export default function CreateForm(){
    const router=useRouter();
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    const [priority,setPriority]=useState("low");

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setIsLoading(true);
        console.log("submitting")
        const user={
            name,phone,email
        }
        const res=await fetch('http://localhost:4000/users',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
        if(res.status===201)
        {   
            router.refresh();
            router.push("/tickets")
        }
    }

    return(
        <div>
            <form className={classes.form} onSubmit={handleSubmit}>
                <label><span>User Name:</span>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  required/>
                </label><br />
                <label><span>Email:</span>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </label><br />
                <label><span>Phone:</span>
                <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                </label>  <br />
                <button disabled={isLoading}>
                    {isLoading&&<span>Loading...</span>}
                    {!isLoading&&<span>Add user</span>}
                </button> 
            </form>    
        </div>
    )
}