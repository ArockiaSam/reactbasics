import React from 'react'

function NameCheck(props){
    if(props.nameInput == 'arockia'){
        return <p>Welcome to welcome</p>
    }
    return <p>You are not eligible to welcome</p>
}

class UserForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name : '',
            userName: '',
            role : '',
            contactNo: '',
            email: ''
        }
        this.nameChange = this.nameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nameChange(event){
        this.setState(
            {name:event.target.value}
        )
    }

    handleSubmit(event){
        alert(`Your name : ${this.state.name}`);
        event.preventDefault();
    }

    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.nameChange} />
                <NameCheck nameInput={this.state.name} />
                <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }
}

export default UserForm