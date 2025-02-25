import React, { useEffect, useState } from 'react';
import './GetUser.css';
import axios from "axios"
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const GetUser = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get("http://localhost:8000/api/users")
                setUsers(response.data)
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        };
        fetchData()
    },[]);

    const deleteUser = async (userId)=>{
      await axios.post(`http://localhost:8000/api/userdeletebyid/${userId}`)
      .then((response)=>{
        setUsers((prevUsers)=>prevUsers.filter((user)=>user._id !== userId))
        toast.success(response.data.message,{position:"top-right"})
      })
      .catch((error)=>{
        console.log(error);
      })
    }

  return (
    <div className='userTable'>
      <Link to="/adduser" type="submit">Add User <i className="fa-solid fa-user-plus"></i></Link>
      
      {users.length === 0 ? (
        <p className="no-users-message">No users to display. Please add users.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope='col'>S.No</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Address</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
              {users.map((user, index)=>(
                 <tr key={user._id}>
                     <td>{index + 1}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>{user.address}</td>
                     <td>
                     <Link to={`/updateuser/${user._id}`} type="button"><i className="fa-solid fa-pen-to-square"></i></Link>
                     <button onClick={() => deleteUser(user._id)} type="button" className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                 </td>
               </tr> 
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetUser;


// // ================ FOR CARDS LAYOUT ==============
// import React, { useEffect, useState } from 'react';
// import './GetUser.css';
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import toast from 'react-hot-toast';

// const GetUser = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8000/api/users");
//                 setUsers(response.data);
//             } catch (error) {
//                 console.log("Error while fetching data", error);
//             }
//         };
//         fetchData();
//     }, []);

//     const deleteUser = async (userId) => {
//         await axios.post(`http://localhost:8000/api/userdeletebyid/${userId}`)
//             .then((response) => {
//                 setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
//                 toast.success(response.data.message, { position: "top-right" });
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

//     return (
//         <div className='user-container'>
//             <Link to="/adduser" className="add-user">Add User <i className="fa-solid fa-user-plus"></i></Link>
            
//             <div className="user-grid">
//                 {users.map((user) => (
//                     <div key={user._id} className="user-card">
//                         <h3>{user.name}</h3>
//                         <p><strong>Email:</strong> {user.email}</p>
//                         <p><strong>Address:</strong> {user.address}</p>
//                         <div className="card-actions">
//                             <Link to={`/updateuser/${user._id}`} className="edit-btn">
//                                 <i className="fa-solid fa-pen-to-square"></i>
//                             </Link>
//                             <button onClick={() => deleteUser(user._id)} className="delete-btn">
//                                 <i className="fa-solid fa-trash"></i>
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default GetUser;

















