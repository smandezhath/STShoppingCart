import { useState } from 'react';
 
const Form = () => {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
  const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
   };
 
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
  };
 

  return (
    <div className="form">
      <div className='head'>
        <h2>Sign Up</h2>
      </div>
 
      <form>
        <p>
        <label className="label">Name</label><br/>
        <input onChange={handleName} className="input" value={name} type="text" />
        </p>
        <p>
        <label className="label">Email</label><br/>
        <input onChange={handleEmail} className="input" value={email} type="email" />
        </p>
        <p>
        <label className="label">Password</label><br/>
        <input onChange={handlePassword} className="input" value={password} type="password" />
        </p>
        <p>
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </p>
      </form>
    </div>
      );
}
export default Form;