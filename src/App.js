import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from "./Statistics/Statistics";
import statisticsData from "./Statistics/statistics-data.json";
import Friends from "./FriendList/FriendsList";
import friendsData from "./FriendList/friend-list.json";
import TransactionHistory from "./TransactionHistory/Transaction";
import transactionsData from "./TransactionHistory/transactions.json";
function App() {
  return (
    <div className="App">
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          avatar={user.avatar}
          location={user.location}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticsData} />
        <Friends friends={friendsData} />
        <TransactionHistory items={transactionsData} />
      </div>
    </div>
  );
}
export default App;
