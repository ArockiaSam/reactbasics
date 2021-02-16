import {Component} from 'react'

class Dynamic extends Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }

        this.changeFunction = this.changeFunction.bind(this)
    }

    changeFunction(){
        console.log('clicked')
        this.setState((prevsState) => ({
            count : prevsState.count + 1
        }))
    }

    // changeFunction = () =>{
    //     console.log('clicked')
    //     this.setState((prevsState) => ({
    //         count : prevsState.count + 1
    //     }))
    // }

    render (){
        return (
            <div>
                <p>clicked count {this.state.count}</p>
                <button onClick={this.changeFunction}>Click Here</button>
            </div>
        )
    }
}

export default Dynamic