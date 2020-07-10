import React, {Component} from 'react';
import Users from './User'
class UsersList extends Component{

    createChat(userId){
        fetch(`http://localhost:8080/api/chat/auth/create?userId=${userId}`)        
    }

    render(){
        return (
        <div className="users">
           {this.props.foundUsers.map(user =>{
                return(
                    <Users user={user} history={this.props.history} setChat={this.props.setChat} createNewChat={this.props.createNewChat} key={user.id} />
                )
            })}
        </div>
        )

    }
}

export default UsersList