import './UserCard.css'
import Thumbnail from './Thumbnail'
import Details from './Details'
import DetailsBtn from './DetailsBtn'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';

const UserCard = ({ firstName, lastName, thumbnailURL, phone, cell, birthday, email, location }) => {
    const [showDeets, setShow] = useState(false)

    const hideShow = () => {
        setShow(!showDeets)
        // console.log('click')
    }

    return (
        <div className="User-card">
            <Thumbnail thumbnailURL={thumbnailURL} firstName={firstName} />
            <h2 className="Name">{firstName} {lastName}</h2>
            <DetailsBtn showDeets={showDeets} hideShow={hideShow}/>
            <Fade collapse when={showDeets}>
            {/* {showDeets ? <Details phone={phone} cell={cell} birthday={birthday} email={email} location={location} /> : <div></div>} */}
            <Details phone={phone} cell={cell} birthday={birthday} email={email} location={location} />
            </Fade>
        </div>
    )
}

export default UserCard
