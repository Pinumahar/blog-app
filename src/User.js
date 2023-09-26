function User(props) {
    const {name,role} = props;
    return(
        <>
         <h1>{name}</h1>
         <p>{role}</p>
        </>
           

        
    );
}

export default User;
