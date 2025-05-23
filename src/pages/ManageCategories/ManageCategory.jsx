import Categoryform from '../../components/CategoryForm/Categoryform';
import CategoryList from '../../components/CategoryLists/CategoryList';
import './ManageCategory.css'

const ManageCategory =() =>{
    return(
        <div className="category-container text-light">
            <div className="left-column">
                <Categoryform/>
            </div>
             <div className="right-column">
                <CategoryList/>
            </div>
        </div>
    )
}

export default ManageCategory;