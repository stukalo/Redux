import React, { Component } from 'react';
import './style.css';

class RegistrationForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submit', this.textInput.value);
        this.textInput.value = '';
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="e-mail"
                    className="email-field"
                    ref={(input) => this.textInput = input}
                />
                <button type="submit"
                        onClick={this.handleSubmit}
                        className="submit-btn"
                >
                  Submit
                </button>
            </form>
        );
    }
}

export default RegistrationForm;