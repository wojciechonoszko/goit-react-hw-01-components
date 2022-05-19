import { UserWrapper, Avatar, Text, SecondaryText } from './userStyles.js'

export const Profile = ({username, tag, location, avatar, stats,followers,views,likes}) => {
    return (
        <>
        <div>
            <UserWrapper>
                <Avatar
                    src={avatar}
                    alt="user avatar"
                    classNameName="avatar"
                />
                <Text>{username}</Text>
                <SecondaryText>@{tag}</SecondaryText>
                <SecondaryText>{location}</SecondaryText>
            </UserWrapper>

            <ul>
              <li>
                <span>Followers</span>
                <span> {followers}</span>
              </li>
              <li>
                <span>Views</span>
                <span> {views}</span>
              </li>
              <li>
                <span>Likes</span>
                <span> {likes}</span>
              </li>
            </ul>
        </div>
        </>
    )
}

export default Profile