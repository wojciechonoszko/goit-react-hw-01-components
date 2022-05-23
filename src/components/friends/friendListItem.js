import { FriendListElem,
        StatusOnOff,
       

} from './friendsStyles.js'


export const FriendListItem = ({isOnline, avatar, name}) => {
    
    const status = `${isOnline ? 'on' : 'off'}`;

    return (

        <FriendListElem>
                
                <StatusOnOff isActive= {isOnline} type='button'>{status}</StatusOnOff>
                <img src={avatar} alt="User avatar" width="48" />
                <p>{name}</p>
        </FriendListElem>
    )
    
};

export default FriendListItem