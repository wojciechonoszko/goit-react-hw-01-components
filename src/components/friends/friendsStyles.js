import styled from 'styled-components';


export const FriendListElem = styled.li`
    border: 1px solid grey;
    margin-top: 10px;
    padding: 10px;
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;


export const StatusOnOff = styled.span`
    
    width: 30px;
    height: 30px;
    background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

