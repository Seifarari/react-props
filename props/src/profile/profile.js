import PropTypes from 'prop-types' 
import Photo from './image'

const Data = props => {
    const handleName = () => {
        alert(props.fullName)
    }
    const styleBtn = {backgroundColor: "blue", fontSize:20, borderRadius: 10}
    return (
        <>
            <Photo>User Image</Photo>

            <h2> {props.fullName}</h2>
            <h4> {props.bio}</h4>
            <h4> {props.profession}</h4>
            <button style={styleBtn} onClick={handleName}>User's Name</button>
           
        </>
    )
}

Data.defaultProps = {
    fullName : "Arari Seif Allah:)",
    bio :"22 years old FullStack JS student",
    profession : "Web Developer"
}


Data.propTypes ={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}


export default Data