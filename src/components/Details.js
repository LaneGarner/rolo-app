import {useEffect} from 'react'
import './Details.css'

const Details = ({ phone, cell, birthday, email, location }) => {

    const birthdayYear = birthday.slice(0,4)
    const birthdayMonth = birthday.slice(5,7)
    const birthdayDate = birthday.slice(8,10)

    useEffect(() => {
        console.log(birthdayMonth, birthdayDate, birthdayYear)
    })

    return (
        <ul className="Details-list">
            <li><strong>Phone:</strong> <a href="tel:{phone}">{phone}</a> </li>
            <li><strong>Cell:</strong> <a href="tel:{cell}">{cell}</a></li>
            <li><strong>Birthday:</strong> {birthdayMonth}-{birthdayDate}-{birthdayYear} </li>
            <li><strong>Email:</strong> {email} </li>
            <li><strong>Address:</strong>
                {location.street.number} {location.street.name}<br />
                {location.city}, {location.state} {location.postcode}
            </li>
        </ul>
    )
}

export default Details