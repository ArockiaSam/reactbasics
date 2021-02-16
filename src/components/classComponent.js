import {Component} from 'react'

class ClassComponent extends Component{

    constructor(){
        super();
        this.state = {
            check : true
        }
    }

    render(){
        return this.state.check && (
            <div>
                <h4>{this.props.msg}</h4>
                {this.props.children}
            </div>
        )
    }
}

export default ClassComponent