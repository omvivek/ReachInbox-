import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';

const Login = () => {
    const navigate = useNavigate();

    const handleGoogleSignUp = () => {
        
        window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=' + encodeURIComponent(window.location.origin);
    };

    useEffect(() => {
        
        const token = new URLSearchParams(window.location.search).get("token");

        if (token) {
            
            localStorage.setItem("jwtToken", token);

            
            navigate("/onebox");
        }
    }, [navigate]);

    return (
        <div className="login-container">
            <header className="login-head">
                <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqIyQP5NxaDJNAKoBKJSDaY0thFjF2d1D1KE0xKSNoTXXB6StU2nFSG1hyGw5a_lvt24kYdlRbGqLoaMAAPy2P9V2DV-AqTunUWfNH1bJF15Qi8KWHh4vJ628VMHW0tAzDgEf0fEc0tDoLSJSX8qs-L654VMFksmUb40aumnoYKS8nwOwkUcFBTGIN/s320/Logo%2012.png"
                    alt="logo"
                    className="login-logo"
                />
            </header>
            <div className="body-div">
                <div id="body-box">
                    <h1 className="body-box-h1">Create a new account</h1>
                    <button className="body-box-button-one" onClick={handleGoogleSignUp}>
                        <img
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsHhkNP9iHN1Iahcy0g2D-09pVKEETrY5fpelrD6hype2JVQp1jQ40FmHpgB2FD6G3LFdB6HvC8TYVyKrC3oY57kM6AXybB2yKoNwXPOLDQcG3t07rwIgrxyBiZMcSOMZUxET7PsySP1-0XOoShrEkwtyQbCTZkLc_B-IsZ0SWgdFJz843RHEbDr8O/s320/Frame.png"
                            alt="Google logo"
                            className="google-icon"
                        /> 
                        Sign Up with Google
                    </button>
                    <button className="body-box-button-two">Create an Account</button>
                    <div className="brder-box-one">
                        <p className="brder-box-one-p">Already have an account?</p>
                        <button className="brder-box-one-button">Sign In</button>
                    </div>
                </div>
            </div>
            <footer className="login-footer">
                <p className="login-footer-p">© 2023 Reachinbox. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Login;
