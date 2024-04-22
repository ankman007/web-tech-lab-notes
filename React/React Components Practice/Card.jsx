import PropTypes from 'prop-types';

function Card(props){
    return (
        <>
            <div className="card">
                <img className="card-image" src="https://via.placeholder.com/150" alt="profile-pic" />
                <h2 className="card-title"> {props.name} </h2>
                <h6 className="card-job-title"> {props.jobTitle} </h6>
                <p className="card-text">I am a student and I am currently in my {props.year}rd year of my undergraduate degree.</p>
            </div>
        </>
    )
}

Card.defaultProps = {
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
};

export default Card