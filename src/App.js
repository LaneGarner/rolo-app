import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard'
import Flip from 'react-reveal/Flip';

const App = () => {
const [users, setUsers] = useState([])

useEffect(async () => {
    axios.get("https://randomuser.me/api?results=25")
    .then(res => {
        const users = res.data.results
        setUsers(users)
    })
    }, [])

useEffect(() => {
  console.log(users)
})

    return (
      <main>
        <h1>rolo</h1>
          <ul className="Users-list">
          {
            users.map((user) => {
              return (
                <Flip left>
                  <li>
                  <UserCard 
                      key={user.email}
                      firstName={user.name.first}
                      lastName={user.name.last}
                      thumbnailURL={user.picture.medium}
                      phone={user.phone}
                      cell={user.cell}
                      birthday={user.dob.date}
                      email={user.email}
                      location={user.location}
                  />
                  </li>
                </Flip>
              )
              })
          }  
          </ul>
    </main>
  );
}


export default App;