import UserImage from "./assets/user.jpeg"git status
function Review(props) {
    const { name= "Anonymous", rating=0, description} = props;

    return (
        <div>
            <h5>{name}</h5>
            <h5>{rating}</h5>
            <p>{description}</p>

        </div>
    )
}

export default Review;
