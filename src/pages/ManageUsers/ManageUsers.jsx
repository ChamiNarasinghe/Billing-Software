import Userform from '../../components/UserForm/Userform';
import UserList from '../../components/UserLists/UserList';
import './ManageUsers.css';


const ManageUsers = () => {
    return (
        <div className="users-container text-light">
            <div className="left-column">
             <Userform/>
            </div>
            <div className="right-column">
               <UserList/>
            </div>
        </div>
    );
};

export default ManageUsers;
