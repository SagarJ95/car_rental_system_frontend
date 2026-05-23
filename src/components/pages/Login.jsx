import React, { useState } from "react";
import "../../assets/style_login.css";
// import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
function Login() {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="login-page">

                <div
                    className={`auth-container ${isActive ? "active" : ""}`}
                    id="container"
                >

                    {/* Signup */}
                    <div className="auth-form-wrapper auth-register-section">

                        <form className="auth-form">

                            <h1 className="auth-title">
                                Create Account
                            </h1>

                            <div className="auth-social-icons">

                                <a href="#" className="auth-social-link">
                                    <i className="fab fa-google"></i>
                                </a>

                                <a href="#" className="auth-social-link">
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a href="#" className="auth-social-link">
                                    <i className="fab fa-github"></i>
                                </a>

                            </div>

                            <input
                                type="text"
                                className="form-control auth-input"
                                placeholder="Full Name"
                            />

                            <input
                                type="email"
                                className="form-control auth-input"
                                placeholder="Email"
                            />

                            <input
                                type="password"
                                className="form-control auth-input"
                                placeholder="Password"
                            />

                            <button
                                type="submit"
                                className="auth-btn"
                            >
                                Sign Up
                            </button>

                        </form>

                    </div>

                    {/* Login */}
                    <div className="auth-form-wrapper auth-login-section">

                        <form className="auth-form">

                            <h1 className="auth-title">
                                Sign In
                            </h1>

                            <div className="auth-social-icons">

                                <a href="#" className="auth-social-link">
                                    <i className="fab fa-google"></i>
                                </a>

                                <a href="#" className="auth-social-link">
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a href="#" className="auth-social-link">
                                    <i className="fab fa-github"></i>
                                </a>

                            </div>

                            <input
                                type="email"
                                className="form-control auth-input"
                                placeholder="Email"
                            />

                            <input
                                type="password"
                                className="form-control auth-input"
                                placeholder="Password"
                            />

                            <a
                                href="#"
                                className="auth-link mb-3 text-decoration-none"
                            >
                                Forgot Password?
                            </a>

                            <button
                                type="submit"
                                className="auth-btn"
                            >
                                Login
                            </button>

                        </form>

                    </div>

                    {/* Overlay */}
                    <div className="auth-overlay-wrapper">

                        <div className="auth-overlay">

                            <div className="auth-overlay-panel auth-overlay-left">

                                <h1 className="auth-title">
                                    Welcome Back!
                                </h1>

                                <p className="auth-text">
                                    Already have an account? Login here
                                </p>

                                <button
                                    className="auth-btn auth-outline-btn"
                                    onClick={() => setIsActive(false)}
                                >
                                    Login
                                </button>

                            </div>

                            <div className="auth-overlay-panel auth-overlay-right">

                                <h1 className="auth-title">
                                    Rent. Drive. Enjoy.
                                </h1>

                                <p className="auth-text">
                                    Find the perfect car for every destination.
                                </p>

                                <button
                                    className="auth-btn auth-outline-btn"
                                    onClick={() => setIsActive(true)}
                                >
                                    Sign Up
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Login;