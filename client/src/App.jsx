import './App.css';
import AddUser from './components/addUser/AddUser';
import GetUser from './components/getUser/GetUser';
import UpdateUser from './components/updateUser/UpdateUser';
import DeleteUser from './components/deleteUser/DeleteUser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <GetUser /> },
    { path: "/adduser", element: <AddUser /> },
    { path: "/updateuser/:id", element: <UpdateUser /> }, // Dynamic route
    { path: "/deleteuser/:id", element: <DeleteUser /> }  // Dynamic route
  ]);

  return <RouterProvider router={router} />;
}

export default App;
