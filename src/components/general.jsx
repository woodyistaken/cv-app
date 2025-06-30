import {TextInput} from "./textInput.jsx"
import {Header} from "./header.jsx"
import { useState } from "react"

function GeneralSection(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [editing,setEditing]=useState(true)

  return (
    <>
    <Header name="General" editing={editing} buttonCallback={()=>setEditing(!editing)}/>
    <TextInput name="Name" value={name} changeCallback={(value)=>{setName(value)}} editing={editing}/>
    <TextInput name="Email" value={email} changeCallback={(value)=>{setEmail(value)}} editing={editing}/>
    <TextInput name="Phone" value={phone} changeCallback={(value)=>{setPhone(value)}} editing={editing}/>
    </>
  )
}

export{GeneralSection}