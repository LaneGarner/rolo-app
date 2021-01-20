import './DetailsBtn.css'

const DetailsBtn = ({ hideShow, showDeets }) => {
    // const [users, setUsers] = useState([])
    // const hideShow = () => {
    //     console.log('click')
    // }

    return (
        <button onClick={()=> hideShow()}>
            {showDeets ? "hide deets" : "show deets"}
        </button>
    )
}

export default DetailsBtn

