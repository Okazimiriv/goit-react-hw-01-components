// import React from "react";
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
// import FriendListItem from 'components/FriendListItem/FriendListItem';
import Transactions from 'components/Transactions/Transactions';

import user from './data/user.json';
import statisticData from './data/statistic-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',        
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >      
      <Profile 
      key={user.username}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={statisticData} />
      <FriendList friendsList={friends} />;
      {/* <FriendListItem           
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        /> */}
      <Transactions items={transactions} />      
    </div>
  );
};

export default App;
