import React, { useEffect, useState } from "react"


const LoginPage = () => {

    const [username, setUser] = useState({username:"",password:""});

    const handleChange = (event) => {
        // console.log("events", event);
        const label = event.target.name;
        const value = event.target.value;
        setUser({...username,[label]:value});
        console.log(username);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("store",JSON.stringify(username));
    };

    return (
    <>
        <div className="d1">
            <h1>
                ShopC
            </h1>
            <p id="cap">A place where you meet your expectations</p>
        </div>
        <div className="text-center m-5-auto" >
            <h2>Sign in</h2>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username" onChange={handleChange} required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" onChange={handleChange} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onSubmit={handleSubmit}>Login</button>
                </p>
            </form>
            {/* <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer> */}
        </div>
        </>
    )
}

export default LoginPage 