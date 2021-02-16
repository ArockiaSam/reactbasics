
import Users from './Users'

function Display(){
    const users = [{name:'Sofs', role:'Manager' }, {name:'Kick', role:'Admin' }]
    const userList = users.map(user => <Users key={user.role} user={user} />)
    // const userList = users.map(user => <div>{user.name}</div>)
    return (<div>{userList}</div>)
    // return (<div>sdf</div>)
}

export default Display