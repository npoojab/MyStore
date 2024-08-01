import React from 'react';
import './css/footer.css';

function Footer(props) {
    return (
        <div>

            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h3>About Us</h3>
                            <img src="https://www.simponiariahcp.com/sites/www.simponiariahcp-v1.com/files/simponiariahcp_logo.png"/>
                        </div>
                        <div className='col-md-4'>
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="About.js">About Us</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <h3>Contact Us</h3>
                            <p>Mobile: 0000000</p>
                            <p>Email: dummy@test.com</p>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>
    );
}

export default Footer;