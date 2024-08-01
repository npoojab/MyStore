import React from 'react';
import './css/services.css'
import Card from './Card';
function Services(props) {
    return (
        <div className='services'>
            <h2 className='text-heading'>Producs</h2>
            <div className='container'>
                <div className='row'>
                    <Card></Card>
                        
                </div>
            </div>
        </div> 
        
    );
}

export default Services;