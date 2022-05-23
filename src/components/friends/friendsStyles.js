import styled from 'styled-components';

export const FriendListElem = styled.li`
    border: 1px solid grey;
    margin-top: 10px;
    padding: 10px;
    width: 300px;
    display: flex;
    flex-direction: row;
`;

export const StatusOnOff = styled.button`
    color: ${(isActive) => (isActive ? 'green' : 'red')};
    
`;

