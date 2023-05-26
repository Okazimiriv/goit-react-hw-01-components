// import React from "react";
import Profile from './components/Profile';
// import Statistics from "./components/Statistics/Statistics";
import Transactions from "./components/Transactions";

import user from './data/user.json';
// import statisticalData from './data/statistic-data.json';
import transactions from "./data/transactions.json";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >      
      <Profile 
      key={user.username}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      {/* <Statistics title="Upload Stats" stats={data} /> */}
      <Transactions items={transactions} />      
    </div>
  );
};

export default App;