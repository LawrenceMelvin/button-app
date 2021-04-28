import React, { Component } from 'react'
import './Formstyle.css'

export class MonthlyExpense extends Component {
    constructor(){
        super();
        this.state={
            cost:'',
        }
        this.expense = this.expense.bind(this)
    }
    expense(event){
        this.setState({
            cost:event.target.value
        })      
    }
    render() {
        return (
            <div className="formDetails">
                Food (groceries, dining out, etc.):                          <input type="number" maxLength="6" onChange={this.expense1}/> <br/>
                Clothing (jeans, shoes, jewelry, etc.):                      <input type="number" maxLength="6" onChange={this.expense2} /> <br/>
                Shelter (mortgage, rent, taxes, etc.):                       <input type="number" maxLength="6" onChange={this.expense3} />  <br/>
                Household (utilities, cell phone, cable, maintenance, etc.): <input type="number" maxLength="6" onChange={this.expense4} />  <br/>
                Transportation (public transportation, parking, gas, etc.):  <input type="number" maxLength="6" onChange={this.expense5} />  <br/>
                Health (insurance, medications, doctor visits, etc.):        <input type="number" maxLength="6" onChange={this.expense6} />  <br/>
                Student Loans (interest/principal payments, etc.):           <input type="number" maxLength="6" onChange={this.expense7} />   <br/>   
                Personal (gifts, charity, entertainment, hobbies, etc.):     <input type="number" maxLength="6" onChange={this.expense8} />  <br/>
                Miscellaneous (magazines, child care, etc.):                 <input type="number" maxLength="6" onChange={this.expense9} />  <br/>
                <h4>Total Monthly Expense : </h4>        
            </div>
        )
    }
}

export default MonthlyExpense
