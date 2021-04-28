import React, { Component } from 'react'
import './Formstyle.css'

export class MonthlyExpense extends Component {
    constructor(){
        super();
        this.state={
            food:'',
            cloth:'',
            shelter:'',
            household:'',
            transport:'',
            health:'',
            student:'',
            personal:'',
            miscellaneous:'',
        }
        this.expense = this.expense.bind(this)
    }
    expense(event){
        this.setState({
           [event.target.name]:event.target.value
        })      
    }
    calculateCost(){
        let food = parseInt(this.state.food)
        let cloth = parseInt(this.state.cloth)
        let shelter = this.state.shelter
        let house = this.state.household
        let transport = this.state.transport
        let health = this.state.health
        let student = this.state.student
        let person = this.state.personal
        let miscellaneous = this.state.miscellaneous
    }
    render() {
        let calculatecost = this.calculateCost() 
        return (
            <div className="formDetails">
                Food (groceries, dining out, etc.):                          <input type="number" name="cost" maxLength="6" onChange={this.expense}/> <br/>
                Clothing (jeans, shoes, jewelry, etc.):                      <input type="number" name="cost" maxLength="6" onChange={this.expense} /> <br/>
                Shelter (mortgage, rent, taxes, etc.):                       <input type="number" name="cost" maxLength="6" onChange={this.expense} />  <br/>
                Household (utilities, cell phone, cable, maintenance, etc.): <input type="number" name="cost" maxLength="6" onChange={this.expense} />  <br/>
                Transportation (public transportation, parking, gas, etc.):  <input type="number" name="cost" maxLength="6" onChange={this.expense} />  <br/>
                Health (insurance, medications, doctor visits, etc.):        <input type="number" name="cost" maxLength="6" onChange={this.expense} />  <br/>
                Student Loans (interest/principal payments, etc.):           <input type="number" name="cost" maxLength="6" onChange={this.expense} />   <br/>   
                Personal (gifts, charity, entertainment, hobbies, etc.):     <input type="number" name="cost" maxLength="6" onChange={this.expense} />  <br/>
                Miscellaneous (magazines, child care, etc.):                 <input type="number" name="cost" maxLength="6" onChange={this.expense} />  <br/>
                <h4>Total Monthly Expense : {calculatecost} </h4>        
            </div>
        )
    }
}

export default MonthlyExpense
