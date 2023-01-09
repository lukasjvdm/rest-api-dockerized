import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    state = {
        users: [{}]
    };

    componentDidMount() {
        this.fetchUsers();
    };

    async fetchUsers() {
        console.log("Fetching users");
        const users = await axios.get('/api');
        console.log("Users fetched");
        this.setState({
            users: users.data
        });
    }

    renderUsers() {
        console.log(this.state.users[0].username);
        return this.state.users.map((user) => user.username).join(', ');
    }

    render() {
        return (
            <div>
            <h3>Users:</h3>
            {this.renderUsers()}
            </div>
        );
    }
}

export default Users;