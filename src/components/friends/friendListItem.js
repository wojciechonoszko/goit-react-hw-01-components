import { FriendListElem,
        StatusOnOff,
       

} from './friendsStyles.js'


export const FriendListItem = ({isOnline, avatar, name}) => {
    
    const status = `${isOnline ? true : false}`;
    console.log(isOnline);
    return (

        <FriendListElem>
                
                <StatusOnOff isOnline={isOnline}>{status}</StatusOnOff>
                <img src={avatar} alt="User avatar" width="48" />
                <p>{name}</p>
        </FriendListElem>
    )
    
};

export default FriendListItem;