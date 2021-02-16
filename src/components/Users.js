// function Users(props){
//         return (
//             <div>
//             <div>
//                 {props.user.name}
//             </div>
//             <div>
//                 {props.user.role}
//             </div>
//             </div>
//         )
// }

function Users({user}){
    return (
        <div>
        <div>
            {user.name}
        </div>
        <div>
            {user.role}
        </div>
        </div>
    )
}

export default Users