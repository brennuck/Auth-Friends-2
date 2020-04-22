import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsForm = () => {
    const [moreFriends, setMoreFriends] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChanges = e => {
        e.preventDefault();
        setMoreFriends({
            ...moreFriends,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/friends", moreFriends)
        .then(res => {
            console.log(res)
            setMoreFriends({ name: '', age: '', email: '' })
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type='text'
                    name="name"
                    id="name"
                    placeholder="name"
                    onChange={handleChanges}
                    value={moreFriends.name}
                />
                <input
                    required
                    type='text'
                    name='age'
                    id='age'
                    placeholder='age'
                    onChange={handleChanges}
                    value={moreFriends.age}
                />
                 <input
                    required
                    type='text'
                    name='email'
                    id='email'
                    placeholder='email'
                    onChange={handleChanges}
                    value={moreFriends.email}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default FriendsForm;
