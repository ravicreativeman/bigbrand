import React from 'react'

// ====== Scss ======
import styles from "./Header.module.scss";

// ======= Import Link ======
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className={`${styles['main-header']}`}>

                <div className="banner-bg curve position-relative">
                    <nav>
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <input type="checkbox" id="nav-toggle" />
                                <div className="logo">Big<strong> <span> Brand </span></strong></div>
                                <ul className="links list-unstyled mb-0">
                                    <li><button>Login</button></li>
                                    <li><button>Sign Up</button></li>
                                </ul>
                                <label htmlFor="nav-toggle" className="icon-burger">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </label>
                            </div>
                        </div>
                    </nav>
                    <div className='p-absolute-50'>
                        <h1 className='banner_title'>Find Your Own Clothing Destination </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header