import React from "react";
import MyButton from "./UI/Button/MyButton";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this)
    }

    Increment() {
        this.setState({ count: this.state.count + 1 })

    }
    Decrement() {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div className="post">
                <h1>{this.state.count}</h1>
                <div>
                    <div>      
                            <MyButton  onClick={this.Increment} >{this.props.Language.Increment}</MyButton>
                            <MyButton  onClick={this.Decrement}>{this.props.Language.Decrement}</MyButton>
                    </div>

                </div>
            </div>
        )
    }
}

export default ClassCounter