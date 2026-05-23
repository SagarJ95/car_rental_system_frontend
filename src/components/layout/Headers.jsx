import React from "react"
import { NavLink } from "react-router"
import '../../assets/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
function Headers() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Car<span>Book</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}><NavLink className="nav-link" to="/">Home</NavLink></li>
                            <li className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to='/about'>About</NavLink></li>
                            <li className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to='/services'>Services</NavLink></li>
                            <li className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to='/pricing'>Pricing</NavLink></li>
                            <li className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to='/cars'>Cars</NavLink></li>
                            <li className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to='/blogs'>Blog</NavLink></li>
                            <li className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to='/contact'>Contact</NavLink></li >
                            <li className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}><NavLink className={({ isActive }) => isActive ? 'nav-link active btn btn-primary' : 'nav-link btn btn-primary'} to='/login'>Login</NavLink></li >
                        </ul >
                    </div >
                </div >
            </nav >

        </>
    )
}
export default Headers