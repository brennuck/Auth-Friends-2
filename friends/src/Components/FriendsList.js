import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendsForm from './FriendsForm';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth().get("/api/friends")
        .then(res => {
            console.log("HELLO", res)
            this.setState({
                friends: res.data
            })
        })
        .catch(err => {
            console.log("FRIENDS ERROR", err)
        })
    }

    render() {
        return (
            <div>
                <FriendsForm />
                {this.state.friends.map(friend => {
                    return (
                        <div>
                            <h2> {friend.name} </h2>
                            <h4> {friend.age} </h4>
                            <h5> {friend.email} </h5>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;