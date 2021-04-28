import React, { Component } from 'react';
import Clock from 'react-live-clock';
import './Formstyle.css'

export class Liveclock extends Component {
    render() {
        return (
            <div className="formDetails">
                <div className="clk">  
                    <Clock format={'HH:mm:ss'} ticking={true} />  
                </div>  
            </div>
        )
    }
}

export default Liveclock
