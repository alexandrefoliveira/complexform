import React, { useState } from "react";

function App() {
    const [fullName , setFullName] = useState({
        fName: "",
        lName: "",
        eMail: ""
    });

    function handleChange(event){
        const {value, name } = event.target;

        setFullName(prevValue => {
            if(name === "fName"){
                return{
                    fName : value,
                    lName : prevValue.lName,
                    eMail : prevValue.eMail
                }
            }else if (name === "lName"){
                return{
                    fName : prevValue.fName,
                    lName : value,
                    eMail : prevValue.eMail
                }
            }else if (name === "eMail"){
                return{
                    fName : prevValue.fName,
                    lName : prevValue.lName,
                    eMail : value
                }
            }
        })
    }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <p> {fullName.eMail}</p>
      <form>
        <input name="fName" onChange={handleChange} placeholder="First Name" value={fullName.fName}/>
        <input name="lName" onChange={handleChange} placeholder="Last Name" value={fullName.lName}/>
        <input name="eMail" onChange={handleChange} placeholder="Email" value={fullName.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
