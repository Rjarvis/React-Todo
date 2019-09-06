import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            taskName: ""
        };
    }
    handleChanges = e => {
        this.setState({ itemName: e.target.value });
        console.log(this.state.taskName);
    };//updoots the state with each keystroke

    handleSubmit = e => {
        this.props.addTask(e, this.state.taskName);
        this.setState({ taskName: ""});
    };//the submit form

    render(){
        console.log("rendering form");
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.state.taskName}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>

        );
    }
}

export default TodoForm;