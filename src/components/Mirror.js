import React, { Component } from 'react'
import './Formstyle.css'
import Webcam from 'react-webcam'

export class Mirror extends Component {
    render() {
        const videoConstraints = {
            facingMode: 'user'
        };
        return (
            <div className='formDetails'>
                <Webcam 
                    audio={false}
                    height={340} 
                    width={350}
                    videoConstraints={videoConstraints}    
                />
            </div>
        )
    }
}

export default Mirror
