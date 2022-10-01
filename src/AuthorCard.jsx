
function AuthorCard(props) {
    const info = props.info;

    return (
        <div class = 'card'>
            <div class='fullname'>{info.name}</div>
            <div class='username'>{info.username}</div>
        </div>
    );
}

export default AuthorCard;
