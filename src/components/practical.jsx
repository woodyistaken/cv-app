import {Header} from "./header.jsx"
import { useState } from "react"
import {CompanyList} from './companyList.jsx'

function PracticalSection(){
  const [editing,setEditing]=useState(true)
  return (
    <>
    <Header name="Practical" editing={editing} buttonCallback={()=>setEditing(!editing)}/>
      <CompanyList editing={editing}/>
    </>
  )
}

export{PracticalSection}