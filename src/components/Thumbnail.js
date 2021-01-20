import './Thumbnail.css'

const Thumbnail = ({thumbnailURL, firstName}) => {
    return (
        <img className="Thumbnail-img" src={thumbnailURL} alt={firstName}/>
    )
}

export default Thumbnail