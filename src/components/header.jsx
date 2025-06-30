import '../stylesheets/header.css'

function Header({name,editing,buttonCallback}){
  return (
    <>
    <div className="header">
      <h1>{name}</h1>
      <button onClick={buttonCallback}>{editing?"Save":"Edit"}</button>
    </div>
    
    </>
  )
}
export {Header}