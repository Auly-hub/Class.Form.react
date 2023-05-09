/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const FunctionForm = () => {
    const[form, setForm] = useState ({
        name: "",
        email: "",
        password:"",
    });

    const handleChange = (event) => {
        event.preventDefault();
        setForm({
            ...form,
        [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log(form)
    }


  return (
    <div>
         <form onSubmit={handleSubmit}>
            <label>name</label>
            <input type="text" name='name' onChange={handleChange}></input>
            <br></br>
            <br></br>
            <label>email</label>
            <input type="email" name='email' onChange={handleChange}></input>
            <br></br>
            <br></br>
            <label>password</label>
            <input type="password" name='password' onChange={handleChange} />
            <br></br>
            <br></br>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FunctionForm;
