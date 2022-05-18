import './friends.css'


export const FriendListItem = ({isOnline, avatar, name}) => {
    const status = `${isOnline ? 'on' : 'off'}`;
    return (

        <li class="item">
                <span class="status">{status}</span>
                <img class="avatar" src={avatar} alt="User avatar" width="48" />
                <p class="name">{name}</p>
        </li>
    )
    
};

export default FriendListItem