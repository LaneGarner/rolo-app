import React, { Component } from 'react'

import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard'

class App extends Component {
    
constructor(props) {
    super(props)
    this.state = {
        users: [],
    }
}

componentDidMount() {
    axios.get("https://randomuser.me/api?results=25")
    .then( res => {
        const users = res.data.results
        this.setState({ users })
    })    
}

render() {
    
return (
    <div>
    <ul>
        {
        this.state.users.map((user) => {
            return (
            <li>
                <UserCard 
                key={user.email}
                firstName={user.name.first}
                lastName={user.name.last}
                thumbnailURL={user.picture.medium}
                />
            </li>
            )
        })
        }  
    </ul>
    </div>
);
    }
}

export default App;
