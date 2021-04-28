import React, { Component } from 'react'
import './Formstyle.css'

export class PrimeorNot extends Component {
    constructor(){
        super();
        this.state={
            prime:''
        }
        this.primeNumber = this.primeNumber.bind(this)
    }
    primeNumber(event){
        this.setState({prime:event.target.value})
    }
    calculatePrime(){
        let prime = this.state.prime
    }
    render() {
        let prime = this.calculatePrime()
        return (
            <div>
                <form className='formDetails'>
                    Enter the Number = <input type='number' maxLength='6' onChange={this.primeNumber}/>
                    <h4>{prime}</h4>
                </form>
            </div>
        )
    }
}

export default PrimeorNot
