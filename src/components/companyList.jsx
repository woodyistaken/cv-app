import { useState } from "react"
import { TextInput } from "./textInput"
import '../stylesheets/list.css'

function CompanyList({editing}){
  const [companies,setCompanies]=useState([])
  const [id,setId]=useState(0)
  function addCompany(){
    setCompanies([...companies,{name:"",title:"",responsibilities:"",dateStart:"",dateEnd:"",id:id}]);
    setId(id+1)
  }
  function changeCompany(part,value,index){
    let newCompanies=[...companies]
    newCompanies[index][part]=value
    setCompanies(newCompanies);
  }
  return (
    <>
      <ul>
        {companies.map((company,index)=>{
          return( 
          <li key={company.id}>
            <TextInput name="Company Name" value={company.name} changeCallback={(value)=>{changeCompany("name",value,index)}} editing={editing}/>
            <TextInput name="Position Title" value={company.title} changeCallback={(value)=>{changeCompany("title",value,index)}} editing={editing}/>
            <TextInput name="Responsibilities" value={company.responsibilities} changeCallback={(value)=>{changeCompany("responsibilities",value,index)}} editing={editing}/>
            <TextInput name="Start Date" value={company.dateStart} changeCallback={(value)=>{changeCompany("dateStart",value,index)}} editing={editing}/>
            <TextInput name="End Date" value={company.dateEnd} changeCallback={(value)=>{changeCompany("dateEnd",value,index)}} editing={editing}/>
          </li>
          )
        })}
      </ul>
      {editing?<button onClick={addCompany}>Add</button>:null}
    </>
  )
}
export {CompanyList}