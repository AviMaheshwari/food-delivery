import React, { useState } from 'react';
import "./login-signup.css";

function LoginSignup() { // Capitalized function name
    const [action, setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="inputs">
                        <input type="text" placeholder="Name" />
                    </div>
                )}
                <div className="inputs">
                    <input type="email" placeholder="Email id" />
                </div>
                <div className="inputs">
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Login" ? null : (
                <div className="forgot-password">
                    Lost Password?<span>click here!</span>
                </div>
            )}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign-up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    );
}
export default LoginSignup;
