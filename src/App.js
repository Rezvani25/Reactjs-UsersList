import React, {useState, Fragment} from 'react';
import AddingUser from './Components/Users/AddingUser';
import UsersList from './Components/Users/UsersList';

function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
    }); 
  }; 

  return (
    <Fragment>
      <AddingUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </Fragment>
  );
}

export default App;
