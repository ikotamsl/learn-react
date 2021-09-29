import React, {Component} from 'react';

class FormComponent extends Component {
    constructor(pros) {
        super(pros);

        this.state = {
            input: '',
            submit: '',
            items: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            submit: this.state.input,
            input: this.state.input,
            items: [...this.state.items, this.state.input]
        })
    }


    render () {
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange}/>
                <button type={'submit'}>Submit!</button>
            </form>
            <h5>Controlled input:</h5>
            <h5>{this.state.submit}</h5>

            <ul>
                {this.state.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        );
    }
}

export default FormComponent;