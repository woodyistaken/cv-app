
import {Header} from "./header.jsx"
import { useState } from "react"
import {SchoolList} from './schoolList.jsx'

function EducationSection(){
  const [editing,setEditing]=useState(true)
  return (
    <>
    <Header name="Education" editing={editing} buttonCallback={()=>setEditing(!editing)}/>
      <SchoolList editing={editing}/>
    </>
  )
}

export{EducationSection}