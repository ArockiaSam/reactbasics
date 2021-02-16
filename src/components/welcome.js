

function Welcome(props){
    return (
        <div>
            <h2>{props.name} Joined</h2>
            {props.children}
        </div>
    )
}

export default Welcome