import styled from 'styled-components';

export const FriendListElem = styled.li`
    border: 1px solid grey;
    margin-top: 10px;
    padding: 10px;
    width: 300px;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
`;


export const StatusOnOff = styled.span`
    width: 20px;
    background-color: ${(isOnline) => (isOnline ? 'green' : 'red')};
    
`;

