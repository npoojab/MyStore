import React from 'react';
import './css/header.css';
import Link from 'react-router-dom'
function Header(props) {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a  class="navbar-brand" to="/contact">MyShop</a >
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a  class="nav-link active " aria-current="page" href="/">Home</a >
                        </li>
                        <li class="nav-item">
                        <a  class="nav-link" to="/contact" href="/About">About Us</a >
                        </li>
                        <li class="nav-item dropdown">
                        <a  class="nav-link dropdown-toggle" to="/contact" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a >
                        <ul class="dropdown-menu">
                            <li><a  class="dropdown-item" to="/contact">Action</a ></li>
                            <li><a  class="dropdown-item" to="/contact">Another action</a ></li>
                            
                            <li><a  class="dropdown-item" to="/contact">Something else here</a ></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a  class="nav-link disabled" aria-disabled="true">Disabled</a >
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </header>  
    );
}

export default Header;