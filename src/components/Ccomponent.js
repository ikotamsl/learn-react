// создание компонента через класс

import React, {Component} from 'react';

class Ccomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,

            visibility: false,
            name: "Ivan Sys"
        };

        // Метод класса не привязан к контексту по умолчанию, поэтому созданный метод внутри
        // компонента требуется вручную привязать к самому себе
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

        this.handleClick = this.handleClick.bind(this);

    }


    handleClick () {

        // setState обновляет свойство this.state заданного класса
        // При записи стрелочной функцией переменная state, которая обращается к this.state,
        // будет изменять свойство, указанное ниже. В данном случае это visibility
        this.setState(state => ({
            visibility: !state.visibility
        }))
    }

    increment () {
        this.setState(state => ({
            count: state.count + 1
        }))
    }


    decrement () {
        this.setState(state => ({
            count: state.count - 1
        }))
    }


    reset () {
        this.setState({
            count: 0
        })
    }

    render() {
        //     if (this.state.visibility) {
        //         return (
        //             <div>
        //                 <button></button>
        //
        //
        //                 {/*<h1>Now you see me</h1>*/}
        //                 {/*<button onClick={this.handleClick}>* Click Click *</button>*/}
        //                 {/*<h2>My name is</h2>*/}
        //                 {/*<p>{this.props.names[0]}</p>*/}
        //                 {/*<p>{this.props.names[1]}</p>*/}
        //                 {/*<p>{this.props.names[2]}</p>*/}
        //             </div>
        //         );
        //     } else {
        //         return (
        //             <div>
        //                 <h1>{this.props.count}</h1>
        //                 <button onClick={this.increment}>go up</button>
        //                 <button onClick={this.decrement}>go down</button>
        //                 <button onClick={this.reset}>reset</button>
        //                 {/*<button onClick={this.handleClick}>Now you don't</button>*/}
        //             </div>
        //         )
        //     }
        // }

        return (
            <div>
                <h1>Current: {this.state.count}</h1>
                <button onClick={this.increment}>go up</button>
                <button onClick={this.decrement}>go down</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default Ccomponent;