import '../stylesheets/textInput.css'

function TextInput({name,value,changeCallback,editing}){
  if(editing){
    return (
      <>
        <label htmlFor={name}>{name}:</label>
        <input id={name} onChange={(e)=>{changeCallback(e.target.value)}} value={value}/>
        <br/>
      </>
    )
  }else{
    return (
      <div className="text">
        <label htmlFor={name}>{name}:</label>
        <p>{value}</p>
        <br/>
      </div>
    )
  }
}

export {TextInput}