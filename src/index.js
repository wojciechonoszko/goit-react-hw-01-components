

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Profile from 'components/user/user';
import Statistic from 'components/statistic/statistic';
import Transaction from 'components/transaction/transaction';
//import FriendList from 'components/friends/friends';
import FriendList from 'components/friends/friendList';


let profile=require('components/user/user.json');


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        
        <Profile username={profile.username}
        avatar={profile.avatar}
        tag={profile.tag}
        location={profile.location}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes}
        >
        </Profile>

        
        <Statistic>

        </Statistic>
        <Transaction/>

        <FriendList/>
       
        
        
        
     
    
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
