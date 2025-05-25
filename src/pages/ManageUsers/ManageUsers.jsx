import { useEffect, useState } from 'react';
import Userform from '../../components/UserForm/Userform';
import UserList from '../../components/UserLists/UserList';
import './ManageUsers.css';
import toast from 'react-hot-toast';
import { fetchUsers } from '../../service/UserService';

const ManageUsers = () => {

    const[users,setUsers] = useState([]);
    const [loading,setLoading] =useState(false);

    useEffect(() => {
        async function loadUsers() {
            try{
                setLoading(true);
                const response = await fetchUsers();
                setUsers(response.data);

            }catch(error){
                console.error(error);
                toast.error("Unable to fetch users");
            } finally{
                setLoading(false);
            }
            
        }
       loadUsers();
    },[]);

    return (
        <div className="users-container text-light">
            <div className="left-column">
             <Userform  setUsers={setUsers}/>
            </div>
            <div className="right-column">
               <UserList users={users}  setUsers={setUsers}/>
            </div>
        </div>
    );
};

export default ManageUsers;
