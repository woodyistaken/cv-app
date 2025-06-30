import { useState } from "react"
import { TextInput } from "./textInput"
import '../stylesheets/list.css'
function SchoolList({editing}){
  const [schools,setSchools]=useState([])
  const [id,setId]=useState(0)
  function addSchool(){
    setSchools([...schools,{name:"",title:"",date:"",id:id}]);
    setId(id+1)
  }
  function changeSchool(part,value,index){
    let newSchools=[...schools]
    newSchools[index][part]=value
    setSchools(newSchools);
  }
  return (
    <>
      <ul>
        {schools.map((school,index)=>{
          return( 
          <li key={school.id}>
            <TextInput name="School Name" value={school.name} changeCallback={(value)=>{changeSchool("name",value,index)}} editing={editing}/>
            <TextInput name="Title of Study" value={school.title} changeCallback={(value)=>{changeSchool("title",value,index)}} editing={editing}/>
            <TextInput name="Date of Study" value={school.date} changeCallback={(value)=>{changeSchool("date",value,index)}} editing={editing}/>
          </li>
          )
        })}
      </ul>
      {editing?<button onClick={addSchool}>Add</button>:null}
    </>
  )
}
export {SchoolList}