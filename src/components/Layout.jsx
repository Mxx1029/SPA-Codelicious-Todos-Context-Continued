import '../App.css';
import Heading from './Heading';
import Login from './Login';
import TodoList from './TodoList';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

function Layout() {

    const { user } = useContext(UserContext);
  
    return (
      <div className="App">
  
          <h1>Codelicious TODO</h1>
  
          {user && <Heading />}
          {user && <TodoList />}
          {!user && <Login />}
  
        </div>
    )
  }

export default Layout;